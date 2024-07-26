import { User } from "@interfaces/models/user"

export interface TimeLine {
    _id: string
    date: Date
    actionType: string
    target: string
    actionDescription: string
    actionBy: User
    actionTitle: string
}   
