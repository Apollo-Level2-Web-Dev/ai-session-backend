import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const MidjourneyConversation = catchAsync(async (req, res) => {
    // const result = await BrandService.getAllBrand(req.query);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Brands are retrieved successfully',
        // meta: result.meta,
        data: result.result,
    });
});
const MidjourneyCode = catchAsync(async (req, res) => {
    // const result = await BrandService.getAllBrand(req.query);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Brands are retrieved successfully',
        // meta: result.meta,
        data: result.result,
    });
});
const MidjourneyImage = catchAsync(async (req, res) => {
    // const result = await BrandService.getAllBrand(req.query);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Brands are retrieved successfully',
        // meta: result.meta,
        data: result.result,
    });
});
const MidjourneyVideo = catchAsync(async (req, res) => {
    // const result = await BrandService.getAllBrand(req.query);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Brands are retrieved successfully',
        // meta: result.meta,
        data: result.result,
    });
});
const MidjourneyMusic = catchAsync(async (req, res) => {
    // const result = await BrandService.getAllBrand(req.query);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Brands are retrieved successfully',
        // meta: result.meta,
        data: result.result,
    });
});


export const MidjourneyController = {
    MidjourneyConversation,
    MidjourneyCode,
    MidjourneyImage,
    MidjourneyVideo,
    MidjourneyMusic
};