import { User } from "@interfaces/models/user"
import { Types } from 'mongoose';

export interface TransportType {
    _id: Types.ObjectId[],
    type: String
    defaultLoad?: Number
    defaultWidth?: Number
    defaultLength?: Number
    defaultHeight?: Number
    updatedBy: User
    createdBy: User
}   
