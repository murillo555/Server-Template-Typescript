import { Types } from 'mongoose';
import { Customer } from './customer';

export interface Comment {
    _id: Types.ObjectId
    entryDate: Date | string
    comment: string
    customer: Customer
}
