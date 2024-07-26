import { Schema, model } from 'mongoose';
import { Review } from "@interfaces/models/review"

const ReviewSchema = new Schema({
    entryDate: {
        type: Date,
        default: Date.now,
    },
    description: {
        type: String,
        required: [true, 'Description is Required'],
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: [true, 'Rating is Required'],
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        required: ['The createdBy is Required'],
        ref: 'Customer',
    },
    target: {
        type: Schema.Types.ObjectId,
        required: ['The target is Required'],
        ref: 'Customer',
    },
})

ReviewSchema.methods.toJSON = function () {
    const { __v, ...review } = this.toObject()
    return review
}

const reviewModel = model<Review>('Review', ReviewSchema)
export default reviewModel;