import User from "./models/user"
import Customer from './models/customer'
import { IncomingHttpHeaders } from "http"
import '@types/jest';
declare module Express {
    interface Request extends ExpressValidator.RequestValidation {

    }
}

export interface ModifiedRequest extends Request {
    user: User | Customer
    headers: IncomingHttpHeaders & {
        xtoken: string
    }
}

declare global {
    namespace Express {
        export interface Request {
            user: User,
            header: IncomingHttpHeaders & {
                xtoken: string
            }
        }
    }
}

declare global {
    namespace NodeJS {
        interface Global {
            document: Document;
            window: Window;
            navigator: Navigator;
        }
    }
}


export declare global {
    const appTest: import('supertest').SuperTest<import('supertest').Test>;
    const serverTest: typeof Server
}

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: number
            MONGODB_CNN: string
            SECRETPRIVATEKEY: string
            EMAIL_HOST: string
            EMAIL_PORT: number
            EMAIL: string
            EMAIL_PASSWORD: string
            EMAIL_SERVICE: string
            NODE_ENV: EnviromentTypes
        }
    }
}

export enum EnviromentTypes {
    Development = "development",
    Production = "production"
}