import { Types } from 'mongoose';
import { User } from "@interfaces/models/user"
import { LocationInterface } from './location';

export interface Search {
    origin?: LocationInterface
    originRadius: number
    destination: LocationInterface
    destinationRadius: number
    transportType?: Types.ObjectId[]
    pickUpEarliest?: string
    pickUpLatest?: string
    height?: number
    width?: number
    large?: number
    weight?: number
    fullLoad?: boolean
    createdDate?: string
    updatedBy?: string
    createdBy?: User
    isLoad?: boolean
    loadType: string
}
