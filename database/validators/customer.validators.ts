import config from '@config'
import { Customer } from "@models";
const { paramsError, entityExists } = config.message;

export const emailValidation = async (email = '') => {
    const emailvalidation = await Customer.findOne({ email });
    if (emailvalidation) {
        throw new Error(`${entityExists.msg}`)
    }
};