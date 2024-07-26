import { Types } from "mongoose"

export interface CreateTransportType {
    type: String
    defaultLoad?: Number
    defaultWidth?: Number
    defaultLength?: Number
    defaultHeight?: Number
    updatedBy?: Types.ObjectId //mongoID
    createdBy: Types.ObjectId //mongoID

}   
