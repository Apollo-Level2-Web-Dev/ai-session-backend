import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const OpenAIConversation = catchAsync(async (req, res) => {
    // const result = await BrandService.getAllBrand(req.query);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Brands are retrieved successfully',
        // meta: result.meta,
        data: result.result,
    });
});
const OpenAICode = catchAsync(async (req, res) => {
    // const result = await BrandService.getAllBrand(req.query);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Brands are retrieved successfully',
        // meta: result.meta,
        data: result.result,
    });
});
const OpenAIImage = catchAsync(async (req, res) => {
    // const result = await BrandService.getAllBrand(req.query);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Brands are retrieved successfully',
        // meta: result.meta,
        data: result.result,
    });
});
const OpenAIVideo = catchAsync(async (req, res) => {
    // const result = await BrandService.getAllBrand(req.query);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Brands are retrieved successfully',
        // meta: result.meta,
        data: result.result,
    });
});
const OpenAIMusic = catchAsync(async (req, res) => {
    // const result = await BrandService.getAllBrand(req.query);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Brands are retrieved successfully',
        // meta: result.meta,
        data: result.result,
    });
});


export const OpenAIController = {
    OpenAIConversation,
    OpenAICode,
    OpenAIImage,
    OpenAIVideo,
    OpenAIMusic
};