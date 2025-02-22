import { StatusCodes } from "http-status-codes";
import sendResponse from "../../utils/sendResponse";

const OpenAIConversation = (async (req, res) => {
    // const result = await BrandService.getAllBrand(req.query);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Brands are retrieved successfully',
        // meta: result.meta,
        data: result.result,
    });
});
const OpenAICode = (async (req, res) => {
    // const result = await BrandService.getAllBrand(req.query);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Brands are retrieved successfully',
        // meta: result.meta,
        data: result.result,
    });
});
const OpenAIImage = (async (req, res) => {
    // const result = await BrandService.getAllBrand(req.query);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Brands are retrieved successfully',
        // meta: result.meta,
        data: result.result,
    });
});
const OpenAIVideo = (async (req, res) => {
    // const result = await BrandService.getAllBrand(req.query);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Brands are retrieved successfully',
        // meta: result.meta,
        data: result.result,
    });
});
const OpenAIMusic = (async (req, res) => {
    // const result = await BrandService.getAllBrand(req.query);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Brands are retrieved successfully',
        // meta: result.meta,
        data: result.result,
    });
});

export const OpenAIService = {
    OpenAIConversation,
    OpenAICode,
    OpenAIImage,
    OpenAIVideo,
    OpenAIMusic
};