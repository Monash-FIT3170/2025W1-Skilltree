import { Schema, model, models } from 'mongoose';

const feedbackSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  content: {
    type: String,
    required: [true, "Feedback content cannot be empty"],
    trim: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5,
  }
}, {
  timestamps: true
});

export const Feedback = models.Feedback || model("Feedback", feedbackSchema);
export type FeedbackType = {
  _id: string;
  user: string;
  post: string;
  content: string;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
