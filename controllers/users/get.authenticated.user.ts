import { Request, Response } from 'express';
import config from '@config';
const { dataBase } = config.message;
import { User, Customer } from "@models"
import logger from '@logger';

const getAuthenticatedUserController = async (req: Request, res: Response) => {
    logger.verbose('[Users, getAuthenticatedUserController]', `User:${req.user.email} action:Get Authenticated User`)
    try {
        let userData
        const user = await User.findById(req.user._id).populate('role', '-__v')
        const customer = await Customer.findById(req.user._id)
        if (user) userData = user;
        else userData = customer
        logger.info('[Users, getAuthenticatedUserController] Succesfully')
        res.json({ user: userData, status: true })
    } catch (error) {
        logger.error('[Users, getAuthenticatedUserController]', ` User:${req.user.email} `, error)
        res.status(500).json(dataBase);
    }
}

export default getAuthenticatedUserController
