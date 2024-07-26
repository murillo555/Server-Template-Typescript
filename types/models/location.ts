import { Types } from 'mongoose';
export interface LocationInterface {
    _id: Types.ObjectId
    city: string
    state: string
    displayName: string
    zipCodes: number[]
    location: {
        type: string
        coordinates: number[]
    }
}