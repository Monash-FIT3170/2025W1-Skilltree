import { Schema, model, models } from 'mongoose';

const skillTreeNodeSchema = new Schema({
  community: {
    type: Schema.Types.ObjectId,
    ref: 'Community',
    required: true,
  },
  name: {
    type: String,
    required: [true, "Node name can not be empty"],
    trim: true,
  },
  experience: {
    type: Schema.Types.ObjectId,
    ref: 'Experience',
    required: true,
  },
  nextNode: {
    type: Schema.Types.ObjectId,
    ref: 'SkillTreeNode',
    default: null,
  },
  previousNode: {
    type: Schema.Types.ObjectId,
    ref: 'SkillTreeNode',
    default: null,
  }
}, {
  timestamps: true
});

export const SkillTreeNode = models.SkillTreeNode || model("SkillTreeNode", skillTreeNodeSchema);
export type SkillTreeNodeType = {
  _id: string;
  community: string;
  name: string;
  experience: string;
  next_node: string | null;
  previous_node: string | null;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
