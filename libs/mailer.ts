import nodemailer from "nodemailer"
import logger from "@logger";

export const transporter = () => {
    const transporter = nodemailer.createTransport({
    service: `${process.env.EMAIL_SERVICE}`,
        host: "smtp.gmail.com",
        port: Number(process.env.EMAIL_PORT),
        secure: true,
        auth: {
            type: "login",
            user: `mx.loadboard.email@gmail.com`,
            pass: `vhjv lmee jlrv awln`,
        },
    });
    transporter.verify()
        .then(() => {
            logger.info('[Transporter, verify transporter], success')
        })
        .catch(err => {
            logger.error('[Transporter, verify transporter]', err)
        })
    return transporter
} 
