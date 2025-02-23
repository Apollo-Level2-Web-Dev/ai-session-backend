/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import { TUserApiLimit } from './userApiLimit.interface';

const userApiLimitSchema = new Schema<TUserApiLimit>(
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



export const UserApiLimit = model<TUserApiLimit>('UserApiLimit', userApiLimitSchema);
