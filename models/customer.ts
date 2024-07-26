import { Schema, model } from 'mongoose';
import { Customer } from "@interfaces/models/customer"
import { v4 } from 'uuid'

const CustomerSchema = new Schema({
    RFC: {
        type: String,
        required: [true, 'The customer RFC is Required'],
        unique: true
    },
    firstName: {
        type: String,
        required: [true, 'The customer FirstName is Required'],
    },
    lastName: {
        type: String,
        required: [true, 'The customer Last Name is Required'],
    },
    email: {
        type: String,
        required: [true, 'The customer Email is required'],
        unique: true,
    },
    phone: {
        type: String,
        required: [true, 'The phone number is required'],
    },
    password: {
        type: String,
        required: [true, 'The customer password is Required'],
    },
    type: {
        type: String,
        enum: ['broker', 'carrier', 'broker-carrier'],
        required: [true, 'The customer type is Required']
    },
    isConfirmed: {
        type: Boolean,
        default: false,
        required: true
    },
    confirmationV4: {
        type: 'string',
        default: v4()
    },
    suscriptionType: {
        type: String,
        enum: ['normal', 'test', 'freeTrial'],
        default: 'freeTrial'
    },
    suscriptionExpirationDate: {
        type: Date,
        required: true,
        default: () => new Date(+new Date() + 7 * 24 * 60 * 60 * 1000)
    },
    autoRenew: {
        type: Boolean,
        default: false,
        required: true
    },
    image: {
        type: Schema.Types.ObjectId,
        ref: 'Attachment'
    },
    attachments: {
        type: [Schema.Types.ObjectId],
        ref: 'Attachment'
    },
    status: {
        type: Boolean,
        default: true,
        required: true
    },
    registerDate: {
        type: Date
    },
    registerType: {
        type: String,
        required: [true, 'The Customer RegisterType is Required'],
        default: 'email'
    },
    createdDate: {
        type: Date
    },
    updatedByUserDate: {
        type: Date
    },
    updatedByCustomerDate: {
        type: Date
    },
    updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    userType: {
        type: String,
        default: "customer"
    }
})

CustomerSchema.methods.toJSON = function () {
    const { __v, password, ...customer } = this.toObject()
    return customer
}

const userModel = model<Customer>('Customer', CustomerSchema)
export default userModel;