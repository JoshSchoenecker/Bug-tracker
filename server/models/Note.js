import mongoose from "mongoose";
import { dbContext } from "../db/DbContext";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId

const Note = new Schema({
    content: { type: String, required: true },
    flawId: { type: ObjectId, ref: 'Flaw', required: true },
    flagged: { type: String, enum: ["pending", "completed", "rejected"] },
    creatorEmail: { type: String, required: true }
}, { timestamps: true, toJSON: { virtuals: true } })

Note.virtual('creator',{
    localField: 'creatorEmail',
    ref:"Profile",
    foreignField:"email",
    justOne: true,
})
export default Note
