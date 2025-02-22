import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const DeepSeekConversation = catchAsync(async (req, res) => {
    // const result = await BrandService.getAllBrand(req.query);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Brands are retrieved successfully',
        // meta: result.meta,
        data: result.result,
    });
});
const DeepSeekCode = catchAsync(async (req, res) => {
    // const result = await BrandService.getAllBrand(req.query);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Brands are retrieved successfully',
        // meta: result.meta,
        data: result.result,
    });
});
const DeepSeekImage = catchAsync(async (req, res) => {
    // const result = await BrandService.getAllBrand(req.query);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Brands are retrieved successfully',
        // meta: result.meta,
        data: result.result,
    });
});
const DeepSeekVideo = catchAsync(async (req, res) => {
    // const result = await BrandService.getAllBrand(req.query);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Brands are retrieved successfully',
        // meta: result.meta,
        data: result.result,
    });
});
const DeepSeekMusic = catchAsync(async (req, res) => {
    // const result = await BrandService.getAllBrand(req.query);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Brands are retrieved successfully',
        // meta: result.meta,
        data: result.result,
    });
});

export const DeepSeekController = {
    DeepSeekConversation,
    DeepSeekCode,
    DeepSeekImage,
    DeepSeekVideo,
    DeepSeekMusic
};