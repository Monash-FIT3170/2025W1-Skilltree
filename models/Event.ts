import { Schema, model, models } from 'mongoose';

const eventSchema = new Schema({
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
  ranked_status: {
    type: Boolean,
    default: false,
  },
  experience_payout: {
    type: Number,
    default: 0,
  },
  experience: {
    type: Schema.Types.ObjectId,
    ref: 'Experience',
    required: true,
  },
}, {
  timestamps: true
});

export const Event = models.Event || model("Event", eventSchema);
export type EventType = {
  _id: string;
  community: string;
  user: string;
  ranked_status: boolean;
  experience_payout: number;
  experience: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
