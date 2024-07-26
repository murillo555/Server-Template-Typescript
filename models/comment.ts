import { Schema, model } from 'mongoose';
import { Comment } from "@interfaces/models/comment"

const CommentSchema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        required: ['The customer is Required'],
        ref: 'Customer',
    },
    entryDate: {
        type: Date,
        default: Date.now,
    },
    comment: {
        type: String,
        required: [true, 'The comment is Required'],
    },
})

CommentSchema.methods.toJSON = function () {
    const { __v, ...comment } = this.toObject()
    return comment
}

const commentModel = model<Comment>('Comment', CommentSchema)
export default commentModel;