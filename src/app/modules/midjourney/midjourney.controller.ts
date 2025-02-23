import { getAuth } from "@clerk/express";
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { MidjourneyService } from "./midjourney.service";


const MidjourneyImage = catchAsync(async (req, res) => {
    const { userId } = getAuth(req);

    const result = await MidjourneyService.MidjourneyImage(userId!, req.body);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Image are retrieved successfully',
        data: result,
    });
});



export const MidjourneyController = {
    MidjourneyImage,

};