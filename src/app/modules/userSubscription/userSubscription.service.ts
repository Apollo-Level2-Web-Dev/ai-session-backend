/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */

import { clerkClient } from "@clerk/express";
import { stripe } from "../../lib/stripe";
import { UserSubscription } from "./userSubscription.model";

const stripePayment = async (
    userId: string,
    settingsUrl: string
) => {



    if (!userId) return false;

    const userSubscription = await UserSubscription.findOne({
        userId
    });

    const user = await clerkClient.users.getUser(userId)

    if (userSubscription && userSubscription.stripeCustomerId) {
        const stripeSession = await stripe.billingPortal.sessions.create({
            customer: userSubscription.stripeCustomerId,
            return_url: settingsUrl,
        })

        return { url: stripeSession.url };

    }

    const stripeSession = await stripe.checkout.sessions.create({
        success_url: settingsUrl,
        cancel_url: settingsUrl,
        payment_method_types: ['card'],
        mode: 'subscription',
        billing_address_collection: 'auto',
        customer_email: user.emailAddresses[0].emailAddress,
        line_items: [
            {
                price_data: {
                    currency: 'GBP',
                    product_data: {
                        name: 'AI Session',
                        description: 'Unlimited AI generations',
                    },
                    unit_amount: 2000,
                    recurring: {
                        interval: 'month',
                    }
                },
                quantity: 1,
            },
        ],
        metadata: { userId }
    })

    return { url: stripeSession.url };
}

export const stripeService = {
    stripePayment
}