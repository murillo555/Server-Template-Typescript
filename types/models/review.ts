import { Types } from 'mongoose';
import { Customer } from "./customer";

export interface Review {
    _id: Types.ObjectId
    entryDate: Date | string
    rating: number
    description: string
    createdBy: Customer
    target: Customer
}
