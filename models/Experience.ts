import { Schema, model, models } from 'mongoose';

const exprerienceSchema = new Schema({
  community: {
    type: Schema.Types.ObjectId,
    ref: 'Community',
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  amount: {
    type: Number,
    default: 0,
  }
}, { timestamps: true })

export const Experience = models.Experience || model("Experience", exprerienceSchema);
export type ExperienceType = {
  _id: string;
  community: string;
  user: string;
  amount?: number;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}