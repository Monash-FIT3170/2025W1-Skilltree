import { Schema, model, models } from 'mongoose';

const leaderboardSchema = new Schema({
  community: {
    type: Schema.Types.ObjectId,
    ref: 'Community',
    required: true,
  },
  users: {
    type: [Schema.Types.ObjectId],
    ref: 'User',
    default: [],
  },
  experiences: {
    type: [Schema.Types.ObjectId],
    ref: 'Experience',
    default: [],
  }
}, {
  timestamps: true
});

export const Leaderboard = models.Leaderboard || model("Leaderboard", leaderboardSchema);
export type LeaderboardType = {
  _id: string;
  community: string;
  users: string[];
  experiences: string[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
