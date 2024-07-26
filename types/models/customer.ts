import { Types } from 'mongoose';
import { Attachment } from "./attachment"
import { User } from "@interfaces/models/user"
import { v4 } from 'uuid'
export interface Customer {
    _id: Types.ObjectId
    RFC: string
    firstName: string
    lastName: string
    email: string
    password: string
    type: string,
    suscriptionType: string
    confirmationV4: string
    suscriptionExpirationDate: Date
    autoRenew: boolean
    image?: Attachment
    attachments?: Attachment[]
    isConfirmed: boolean
    status: boolean
    registerDate?: String
    registerType?: string
    createdDate?: string
    updatedByUserDate?: Date
    updatedByCustomerDate?: Date
    updatedBy?: User
    createdBy?: User
    userType: string
}