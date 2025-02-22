import { StatusCodes } from "http-status-codes";
import sendResponse from "../../utils/sendResponse";

const DeepSeekConversation = (async (req, res) => {
    // const result = await BrandService.getAllBrand(req.query);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Brands are retrieved successfully',
        // meta: result.meta,
        data: result.result,
    });
});
const DeepSeekCode = (async (req, res) => {
    // const result = await BrandService.getAllBrand(req.query);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Brands are retrieved successfully',
        // meta: result.meta,
        data: result.result,
    });
});
const DeepSeekImage = (async (req, res) => {
    // const result = await BrandService.getAllBrand(req.query);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Brands are retrieved successfully',
        // meta: result.meta,
        data: result.result,
    });
});
const DeepSeekVideo = (async (req, res) => {
    // const result = await BrandService.getAllBrand(req.query);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Brands are retrieved successfully',
        // meta: result.meta,
        data: result.result,
    });
});
const DeepSeekMusic = (async (req, res) => {
    // const result = await BrandService.getAllBrand(req.query);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Brands are retrieved successfully',
        // meta: result.meta,
        data: result.result,
    });
});

export const DeepSeekService = {
    DeepSeekConversation,
    DeepSeekCode,
    DeepSeekImage,
    DeepSeekVideo,
    DeepSeekMusic
};