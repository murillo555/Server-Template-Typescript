import { Request, Response } from 'express';
import config from '@config';
const { entityCreate, dataBase } = config.message;
const { customer: customerTarget } = config.timeLineTargets
const { mailTemplate, confirmBodyEmail, webUrl } = config
import logger from "@logger"
import { RegisterCustomerBody } from '@interfaces/requests/customer';
import { Customer } from '@models';
import { TimeLine } from '@models';
import bcrypt from "bcryptjs"
import dayjs = require('dayjs');
import { transporter } from '@mail';

interface RequestBody extends Request {
    body: RegisterCustomerBody
}

const registerCustomerController = async (req: RequestBody, res: Response) => {
    logger.verbose('[Customers, registerCustomerController]', `Method to Register a new customer`)
    const { RFC, firstName, lastName, email, password, type, phone } = req.body;
    try {
        const customer = new Customer({ RFC, firstName, lastName, email, password, type, phone });
        const salt = await bcrypt.genSaltSync();
        customer.password = await bcrypt.hashSync(password, salt);
        customer.registerDate = dayjs().toISOString()
        customer.createdDate = dayjs().toISOString()
        await customer.save()
        const emailData = {
            to: `${email}`,
            subject: "Email Confirmation",
            html: mailTemplate.es?.replace('$content', confirmBodyEmail.es).replace('$firstName', customer?.firstName).replace('$lastName', customer?.lastName).replace('$link', `${webUrl[process.env.NODE_ENV]}activeuser/${customer?.confirmationV4}`)
        }
        transporter().sendMail(emailData)

        const event = {
            date: dayjs().toDate(),
            actionType: 'CREATE',
            target: customerTarget,
            actionBy: customer._id,
            actionDescription: `Usuario ${customer.firstName} ${customer.lastName} Creado`,
            es: `Cliente ${customer?.email}: ${customer?.firstName} ${customer?.lastName} Creado`,
            en: `Customer ${customer?.email}: ${customer.firstName} ${customer.lastName} was created`
        }
        logger.info('[Customers, registerCustomerController]', `Custome ${customer?.email} created successfully`)
        await TimeLine.create(event);
        return res.status(200).json(entityCreate)
    } catch (error) {
        logger.error('[Customers, registerCustomerController]', ` Customer:${email} `, error)
        res.status(400).json(dataBase)
    }
}

export default registerCustomerController;