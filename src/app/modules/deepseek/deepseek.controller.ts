import { getAuth } from "@clerk/express";
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { DeepseekService } from "./deppseek.service";

const DeepSeekConversation = catchAsync(async (req, res) => {
    const { userId } = getAuth(req);

    const result = await DeepseekService.DeepseekConversation(userId!, req.body);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Brands are retrieved successfully',
        data: result,
    });
});
const DeepSeekCode = catchAsync(async (req, res) => {
    const { userId } = getAuth(req);

    const result = await DeepseekService.DeepseekCode(userId!, req.body);

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

};