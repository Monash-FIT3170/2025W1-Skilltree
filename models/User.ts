import { Schema, model, models } from 'mongoose';
import { compareSync, hashSync } from 'bcryptjs';

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name can not be empty"],
    trim: true,
    minLength: [3, "Name must be at least 3 characters long"],
    maxLength: [50, "Name must be at most 50 characters long"]
  },
  email: {
    type: String,
    required: [true, "Email address can not be empty"],
    unique: [true, "This email address is already in use"],
    validate: {
      validator: function (email: string) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      }
    },
  },
  password: {
    type: String,
    select: false,
  }
}, {
  timestamps: true
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = hashSync(this.password!, 10);
  next();
});

userSchema.methods.comparePassword = async function (password: string) {
  return compareSync(password, this.password);
}

export const User = models.User || model("User", userSchema);
export type UserType = {
  _id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  comparePassword: (password: string) => boolean
}