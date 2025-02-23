import { getAuth } from "@clerk/express";
import { StatusCodes } from "http-status-codes";
import { absoluteUrl } from "../../utils/absoluteUrl";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { stripeService } from "./userSubscription.service";


const StripeSubscribe = catchAsync(async (req, res) => {
    const { userId } = getAuth(req);
    const settingsUrl = absoluteUrl('/settings');
    const result = await stripeService.stripePayment(userId!, settingsUrl);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Subscription created successfully',
        data: result,
    });
});

export const StripeController = {
    StripeSubscribe
}