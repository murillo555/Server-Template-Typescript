import { Request, Response } from 'express';
import logger from "@logger"
import config from '@config';
const { dataBase, badAuth } = config.message;
import { User, Customer } from '@models';
import bcrypt from "bcryptjs"
import TokenGenerator from './jwtGenerate';


const login = async (req: Request, res: Response) => {
    logger.verbose('[Auth, login]', 'method to login into application')
    const { email, password } = req.body
    try {
        let userData
        //Email Verification
        const customer = await Customer.findOne({ email })
        const user = await User.findOne({ email })
        logger.silly(customer)

        if (user) userData = user;
        else userData = customer

        if ((!user || !user.status) && (!customer || !customer.status || !customer?.isConfirmed)) return res.status(400).json(badAuth)
        //Password Verification
        const passwordValidation = bcrypt.compareSync(password, `${userData?.password}`)
        if (!passwordValidation) return res.status(400).json(badAuth)
        logger.debug(userData)
        //Jwt Generation
        const token = await TokenGenerator(`${userData?._id}`)
        res.json({ token, status: true })
    } catch (error) {
        logger.error('[Auth, login]', 'method to login into application')
        return res.status(500).json(dataBase)
    }
}



export default login