import { getAuth } from "@clerk/express";
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { DeepSeekService } from "./deppseek.service";

const DeepSeekConversation = catchAsync(async (req, res) => {
    const { userId } = getAuth(req);

    const result = await DeepSeekService.DeepSeekConversation(userId!, req.body);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Brands are retrieved successfully',
        data: result,
    });
});
const DeepSeekCode = catchAsync(async (req, res) => {
    const { userId } = getAuth(req);

    const result = await DeepSeekService.DeepSeekCode(userId!, req.body);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Brands are retrieved successfully',
        data: result,
    });
});
const DeepSeekImage = catchAsync(async (req, res) => {
    const { userId } = getAuth(req);
    const result = await DeepSeekService.DeepSeekImage(userId!, req.body);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Brands are retrieved successfully',
        data: result,
    });
});


export const DeepSeekController = {
    DeepSeekConversation,
    DeepSeekCode,
    DeepSeekImage,

};