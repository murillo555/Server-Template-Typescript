import { Schema, model } from 'mongoose';
import { Review } from "@interfaces/models/review"

const Changes = new Schema({
    type: {
        type: String,
        enum: ["Corrección", "Funcion", "Actualizacion"],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    subchanges: {
        type: [String],
        required: false
    }
});


const releaseNote = new Schema({
    version: {
        type: String,
        required: [true, 'Description is Required'],
    },
    date: {
        type: Date,
        default: Date.now,
    },
    changes: {
        type: Changes,
        required: true
    }
})

releaseNote.methods.toJSON = function () {
    const { __v, ...notes } = this.toObject()
    return notes
}

const reviewModel = model<Review>('ReleaseNote', releaseNote)
export default reviewModel;