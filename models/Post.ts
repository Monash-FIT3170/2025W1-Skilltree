import { Schema, model, models } from 'mongoose';

const postSchema = new Schema({
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
  text: {
    type: String,
    required: [true, "Post text can not be empty"],
    trim: true,
  },
  attachment: {
    type: String,
    default: "",
  }
}, {
  timestamps: true
});

export const Post = models.Post || model("Post", postSchema);
export type PostType = {
  _id: string;
  community: string;
  user: string;
  text: string;
  attachment: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
