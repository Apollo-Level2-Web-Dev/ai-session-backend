import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { OpenAIService } from "./openai.service";

const OpenAIConversation = catchAsync(async (req, res) => {
    const result = await OpenAIService.OpenAIConversation(req.body);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Conversation created successfully',
        data: result,
    });
});
const OpenAICode = catchAsync(async (req, res) => {

    const result = await OpenAIService.OpenAICode(req.body);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Code is retrieved successfully',
        data: result,
    });
});
const OpenAIImage = catchAsync(async (req, res) => {
    const result = await OpenAIService.OpenAIImage(req.body);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Image is retrieved successfully',
        data: result
    });
});



export const OpenAIController = {
    OpenAIConversation,
    OpenAICode,
    OpenAIImage,
};