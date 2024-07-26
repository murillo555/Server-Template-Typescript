import { Request, Response } from 'express';
import config from '@config';
const { entityActive, dataBase, paramsError } = config.message;
import logger from "@logger"
import { Customer } from '@models';

const confirmCustomer = async (req: Request, res: Response) => {
    logger.verbose('[Customers, confirmCustomer]', `Method to Register a new customer`)
    const { uuid } = req.params;
    try {
        const customer = await Customer.findOne({ confirmationV4: uuid })
        if (!customer) res.status(400).json(paramsError)
        else {
            customer.isConfirmed = true
            await customer.save()
            res.json(entityActive)
        }
    } catch (error) {
        logger.error('[Customers, confirmCustomer]', ` UUID: ${uuid}`, error)
        res.status(500).json(dataBase)
    }
}

export default confirmCustomer;