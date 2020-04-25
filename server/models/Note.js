import mongoose from "mongoose";
import { dbContext } from "../db/DbContext";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId

const Note = new Schema({
    content: { type: String, required: true },
    bug: { type: ObjectId, ref: 'Bug', required: true },
    flagged: { type: String, enum: ["pending", "completed", "rejected"] },
    creatorEmail: { type: String, required: true }
}, { timestamps: true, toJSON: { virtuals: true } })
export default Note