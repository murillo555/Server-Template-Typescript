import { Types } from 'mongoose';
import { TransportType } from '@interfaces/models/transportType';
import { LocationInterface } from '@interfaces/models/location';
export interface SearchRequest {
    origin: LocationInterface
    destination: LocationInterface
    originRadius: number
    destinationRadius: number
    transportType?: TransportType
    pickUpEarliest?: string
    pickUpLatest?: string
    length?: number
    height?: number
    width?: number
    large?: number
    weight?: number
    fullLoad?: boolean
    isLoad?: boolean
    loadType: String
}
export interface Location {
    displayName: string
    name: string
    state: string
    zipCodes: number[]
}

