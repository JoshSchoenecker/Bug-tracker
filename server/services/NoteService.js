import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class NoteService{
    async getNotesByFlawId(id, email) {
        return await dbContext.Notes.find({creatorEmail: email, flawId: id})
    }
    async create(rawData) {
        let data = await dbContext.Notes.create(rawData)
        return data
    }

    async getAll(userEmail) {
        return await dbContext.Notes.find({ creatorEmail: userEmail })
        // .populate("creator", "name picture")
    }

    async getById(id, userEmail) {
        let data = await dbContext.Notes.findOne({ _id: id, creatorEmail: userEmail })
        if (!data) {
            throw new BadRequest("Invalid ID or you do not own this Note")
        }
        return data
    }

    async delete(id, userEmail) {
        let data = await dbContext.Notes.findOneAndRemove({ _id: id, creatorEmail: userEmail });
        if (!data) {
            throw new BadRequest("Invalid ID or you do not own this Note");
        }
        return data
    }
    
    async edit(id, userEmail, update) {
        let data = await dbContext.Notes.findOneAndUpdate({ _id: id, creatorEmail: userEmail }, update, { new: true })
        if (!data) {
            throw new BadRequest("Invalid ID or you do not own this Note");
        }
        return data;
    }
}

export const noteService = new NoteService()