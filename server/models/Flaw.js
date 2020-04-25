import mongoose from "mongoose";
import { dbContext } from "../db/DbContext";
let Schema = mongoose.Schema;


const Flaw = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    closed: { type: Boolean, required: true, default: false },
    closedDate: { type: Date},
    creatorEmail: { type: String, required: true }
}, 
{ timestamps: true, toJSON: { virtuals: true } 
})
Flaw.virtual('creator',{
    localField: 'creatorEmail',
    ref:"Profile",
    foreignField:"email",
    justOne: true,
})

export default Flaw;