import mongoose from "mongoose";
import ValueSchema from "../models/Value";
import FlawSchema from "../models/Flaw";
import NoteSchema from "../models/Note";
import ProfileSchema from "../models/Profile";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Flaws = mongoose.model("Flaw", FlawSchema);
  Notes = mongoose.model("Note", NoteSchema);
  Profile = mongoose.model("Profile", ProfileSchema);
}

export const dbContext = new DbContext();
