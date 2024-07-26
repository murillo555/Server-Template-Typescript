import { Types } from 'mongoose';
import { TransportType } from "./transportType";
import { Comment } from "./comment";
import { Customer } from "./customer";
import { LocationInterface } from './location';

export interface ShipmentPost {
    _id: Types.ObjectId
    active: boolean
    comments: Comment[]
    completed: boolean
    createdAt: Date | string
    createdBy: Customer
    customer: Customer
    destination: LocationInterface
    dropOffEarliest: Date | string
    dropOffHours: Date | string
    dropOffLatest: Date | string
    fullLoad: boolean
    length: number
    notes: string
    open: boolean
    origin: LocationInterface
    pickUpEarliest: Date | string
    pickUpHours: Date | string
    publishDate: Date | string
    pickUpLatest: Date | string
    rate: number
    referenceId: string
    transportType: TransportType
    updatedAt: Date | string
    updatedBy: Customer
    weight: number
    contactData: ContactData
    commodity: string
    distance?: number
}


export interface ContactData {
    email: string
    phone: string
    other: string
}