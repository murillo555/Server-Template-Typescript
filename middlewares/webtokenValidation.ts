import jwt from 'jsonwebtoken'
import config from "@config"
import { Request, Response, NextFunction, RequestHandler } from 'express';
import { User, Customer } from "@models"
const { notAuth } = config.message
import logger from "@logger"
import { UserValidated } from '@interfaces/models/user';
import { User as UserInterface } from "@interfaces/models/user"
import { Customer as CustomerInterface } from '@interfaces/models/customer';
import { IncomingHttpHeaders } from "http"


interface jwtPayload {
    uid: string
}

interface CustomRequest extends Request {
    user: UserInterface | CustomerInterface
    headers: IncomingHttpHeaders & {
        xtoken: string
    }
}
/**
 * This middleware is for validate users token 
 * @return {string} token
 * @author Gabriel Murillo
 */
const jwtValidation = async (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.headers['xtoken']
    if (!token) return res.status(401).json({ msg: 'Petition without token', status: false });
    try {
        let AuthUser
        const { uid } = await jwt.verify(token, `${process.env.SECRETPRIVATEKEY}`) as jwtPayload;
        const customer = await Customer.findById(uid)
        const user = await User.findById(uid).populate('role', '-__v');

        if (user) AuthUser = user;
        else AuthUser = customer
        if (!AuthUser) return res.status(401).json(notAuth);
        if (!AuthUser?.status) res.status(401).json(notAuth);

        req.user = AuthUser;
        logger.silly("Authenticated user: ", `${req.user.firstName} ${req.user.lastName}`);
        next();
    } catch (error) {
        logger.error('(middlewares, jwtValidation)', error);
        res.status(401).json(notAuth)
    }
};

export default jwtValidation