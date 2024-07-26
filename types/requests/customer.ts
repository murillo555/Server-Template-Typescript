import { Types } from 'mongoose';

export interface RegisterCustomerBody {
    RFC: string
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string,
    type: string
}