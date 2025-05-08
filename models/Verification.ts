import { Schema, model, models } from 'mongoose';

const verificationSchema = new Schema({
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
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
  verifier: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    default: null,
  }
}, {
  timestamps: true
});

export const Verification = models.Verification || model("Verification", verificationSchema);
export type VerificationType = {
  _id: string;
  community: string;
  user: string;
  post: string;
  status: 'pending' | 'approved' | 'rejected';
  verifier: string | null;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
