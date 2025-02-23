/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { DAY_IN_MS } from "../constants";
import { UserSubscription } from "../modules/userSubscription/userSubscription.model";




const checkSubscription = async (userId: string) => {

    if (!userId) return false;

    const userSubscription = await UserSubscription.findOne({
        userId
    });

    if (!userSubscription) return false;

    const isValid =
        userSubscription.stripePriceId &&
        userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now();

    return !!isValid;
}

const getSubscription = async (userId: string) => {

    if (!userId) return null;

    const userSubscription = await UserSubscription.findOne({
        userId
    });

    return userSubscription;
}


export const userSubscription = {
    checkSubscription,
    getSubscription
}