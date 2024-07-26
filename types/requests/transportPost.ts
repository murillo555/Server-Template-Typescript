import { Types } from 'mongoose';
import { LocationInterface } from '@interfaces/models/location';

export interface TransportPostBody {
    createdBy: Types.ObjectId
    destination: LocationInterface
    dropOffEarliest?: Date | string
    dropOffHours?: Date | string
    dropOffLatest?: Date | string
    fullLoad?: boolean
    length?: number
    notes?: string
    origin: LocationInterface
    open?: boolean
    pickUpEarliest?: Date | string
    pickUpHours?: Date | string
    pickUpLatest?: Date | string
    rate?: number
    referenceId?: string
    transportType: Types.ObjectId
    weight?: number
    contactData: ContactData,
}

export interface ContactData {
    email: string
    phone: string
    other: string
}

export interface Location {
    displayName: string
    name: string
    state: string
    zipCodes: number[]
}