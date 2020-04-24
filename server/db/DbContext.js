import mongoose from "mongoose";
import ValueSchema from "../models/Value";
import BugSchema from "../models/Bug";
import NoteSchema from "../models/Note";
import ProfileSchema from "../models/Profile";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Bugs = mongoose.model("Value", BugSchema);
  Notes = mongoose.model("Value", NoteSchema);
  Profile = mongoose.model("Profile", ProfileSchema);
}

export const dbContext = new DbContext();
