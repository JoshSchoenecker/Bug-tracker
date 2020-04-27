import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class FlawService{
    async create(rawData) {
        let data = await dbContext.Flaws.create(rawData)
        return data
    }

    async getAll() {
        return await dbContext.Flaws.find()
        // .populate("creator", "name picture")
    }

    async getById(id, userEmail) {
        let data = await dbContext.Flaws.findOne({ _id: id, creatorEmail: userEmail })
        if (!data) {
            throw new BadRequest("Invalid ID or you do not own this flaws")
        }
        return data
    }

    async delete(id) {
        let data = await dbContext.Flaws.findOneAndRemove({ _id: id});
        if (!data) {
            throw new BadRequest("Invalid ID or you do not own this flaws");
        }
        return data
    }
    async edit(id, userEmail, update) {
        let data = await dbContext.Flaws.findOneAndUpdate({ _id: id, creatorEmail: userEmail }, update, { new: true })
        if (!data) {
            throw new BadRequest("Invalid ID or you do not own this flaws");
        }
        return data;
    }
    async closeFlaw(id, userEmail, update){
        await dbContext.Flaws.findOneAndUpdate(id, {closed: true})
    }
}

export const flawService = new FlawService()