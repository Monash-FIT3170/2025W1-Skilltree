import { Schema, model, models } from 'mongoose';

const communitySchema = new Schema({
  name: {
    type: String,
    required: [true, "Community name can not be empty"],
    trim: true,
    minLength: [3, "Community name must be at least 3 characters long"],
    maxLength: [100, "Community name must be at most 100 characters long"]
  },
  skill: {
    type: String,
    required: [true, "Skill can not be empty"],
    trim: true
  },
  skilltree: {
    type: Schema.Types.Mixed,
    default: {},
  },
  icon: {
    type: String,
    default: "",
  },
  tags: {
    type: [String],
    default: [],
  },
  description: {
    type: String,
    default: "",
  },
  experience: {
    type: Number,
    default: 0,
  },
  admins: {
    type: [Schema.Types.ObjectId],
    ref: 'User',
    default: [],
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  verifiedUsers: {
    type: [Schema.Types.ObjectId],
    ref: 'User',
    default: [],
  }
}, {
  timestamps: true
});

export const Community = models.Community || model("Community", communitySchema);
export type CommunityType = {
  _id: string;
  name: string;
  skill: string;
  skilltree: any;
  icon: string;
  tags: string[];
  description: string;
  experience: number;
  admins: string[];
  creator: string;
  verifiedUsers: string[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
