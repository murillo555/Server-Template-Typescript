import { Application } from 'express'
import * as express from "express";
import cors from 'cors'
import logger from '@logger'
import { userRoutes, roleRoutes, authRoutes, attachmentRoutes, customerRoutes, utilsRoutes } from 'routes'
import { connection, disconnect } from '../database/config'

class Server {
    private app: Application;
    private port: string;
    private paths = {
        auth: '/auth',
        user: '/user',
        role: '/role',
        attachment: '/attachment',
        transportType: '/transport-type',
        customer: '/customer',
        shipmentPost: '/shipment-post',
        transportPost: '/transport-post',
        utils: '/utils',
        search: '/search'
    }

    constructor() {
        this.app = express.default();
        this.port = `${process.env.PORT}` || '8010';
        //Connect Data Base
        this.connectDB();
        //Middlewares
        this.middlewares();
        //Routes
        this.routes();
    }

    async connectDB() {
        await connection();
    }
    async disconnectDB() {
        await disconnect()
    }

    getApp() {
        return this.app
    }

    middlewares() {
        //Cors
        this.app.use(cors());
        //Read 
        this.app.use(express.json());
        //Views
        this.app.use(express.static('views'));
    }

    routes() {
        this.app.use(this.paths.user, userRoutes)
        this.app.use(this.paths.role, roleRoutes)
        this.app.use(this.paths.auth, authRoutes)
        this.app.use(this.paths.attachment, attachmentRoutes)
        this.app.use(this.paths.customer, customerRoutes)
        this.app.use(this.paths.utils, utilsRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            logger.info('Listen at :', this.port);
        });
    }

}

export default Server