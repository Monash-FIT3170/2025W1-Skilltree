import mongoose, { Schema, models } from "mongoose";

const communitySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    moderator: { type: String, required: true }, // store the user's email
  },
  { timestamps: true }
);

const Community = models.Community || mongoose.model("Community", communitySchema);

export default Community;