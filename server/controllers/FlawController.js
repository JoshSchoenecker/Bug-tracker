import express from "express";
import BaseController from "../utils/BaseController";
import auth0provider from "@bcwdev/auth0provider";
import { flawService } from "../services/FlawService";

export class FlawController extends BaseController {
  async delete(req, res, next) {
    try {
      await flawService.delete(req.params.id, req.userInfo.email);
      return res.send("Item Deleted");
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      let data = await flawService.edit(req.params.id, req.userInfo.email);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
        req.body.ceatorEmail = req.userInfo.email
        let data = await flawService.create(req.body)
        // returning status 201 gives us a Create succeded status
        return res.status(201).send(data)
    } catch (error) {
        next(error)
    }
  }
  async getById(req, res, next) {
try {
    let data = await flawService.getById(req.params.id, req.userInfo.email)
    return res.send(data)
} catch (error) {
    next(error)
}
}
  async getAll(req, res, next) {
try {
    let data = await flawService.getAll(req.user.email)
    return res.send(data)
} catch (error) {
    next(error)
}
}
  constructor() {
    super("api/flaws");
    this.router
        // placing auth provider here will require authorization before any of the request below it

      .use(auth0provider.getAuthorizedUserInfo)
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/id", this.edit)
      .delete("/id", this.delete);
  }
}
