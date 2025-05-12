import { Schema, model, models } from 'mongoose';

const skillForestSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  communities: {
    type: [Schema.Types.ObjectId],
    ref: 'Community',
    default: [],
  },
  followers: {
    type: [Schema.Types.ObjectId],
    ref: 'User',
    default: [],
  }
}, {
  timestamps: true
})

export const SkillForest = models.SkillForest || model("SkillForest", skillForestSchema);
export type SkillForestType = {
  _id: string;
  user: string;
  communities: string[];
  followers: string[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}