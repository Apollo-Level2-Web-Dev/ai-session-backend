/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import { TUser } from '../user/user.interface';

const userSchema = new Schema<TUser>(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    count: {
      type: Number,
      required: true,
    }
  },
  {
    timestamps: true,
  },
);



export const User = model<TUser>('User', userSchema);
