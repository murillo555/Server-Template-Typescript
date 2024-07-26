import config from '@config'
import { ShipmentPost } from '@models'
const { paramsError } = config.message;

export const shipmentPostValidationById = async (id = '') => {
    const shipmentPostValidation = await ShipmentPost.findById(id);
    if (!shipmentPostValidation) {
        throw new Error(`${paramsError.msg}`)
    }
};