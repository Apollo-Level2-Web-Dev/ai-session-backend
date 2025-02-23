

import { Schema, model } from 'mongoose';

import { TUserSubscription } from './userSubscription.interface';


const userSubscriptionSchema = new Schema<TUserSubscription>(
    {
        userId: {
            type: String,
            required: true,
            unique: true,
        },
        stripeCustomerId: {
            type: String,
            unique: true,
        },
        stripeSubscriptionId: {
            type: String,
            unique: true,
        },
        stripePriceId: {
            type: String,
        },
        stripeCurrentPeriodEnd: {
            type: Date,
        },
    },
    {
        timestamps: true,
    },
);


export const UserSubscription = model<TUserSubscription>('UserSubscription', userSubscriptionSchema);