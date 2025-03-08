/* eslint-disable @typescript-eslint/no-explicit-any */


import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/AppError";
import { openai } from "../../utils/openai";

const OpenAICode = async (payload: any) => {


    if (!openai.apiKey) {
        throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, 'OpenAI API key not configured');
    }

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{
            content: `You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations. ${payload.messages}`,
            role: "system"
        }],
    });

    return response.choices[0].message;
};

const OpenAIConversation = async (
    payload: any
) => {


    if (!openai.apiKey) {
        throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, 'OpenAI API key not configured')
    }

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{
            content: `You are a conversation generator. You must answer in complete sentences. ${payload.messages}`,
            role: "system"
        }],
    })

    return response.choices[0].message
}

const OpenAIImage = async (
    payload: any
) => {


    if (!openai.apiKey) {
        throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, 'OpenAI API key not configured')
    }

    if (!payload.prompt) {
        throw new AppError(StatusCodes.BAD_REQUEST, 'Prompt is required')
    }

    if (!payload.amount) {
        throw new AppError(StatusCodes.BAD_REQUEST, 'Amount is required')
    }

    if (!payload.resolution) {
        throw new AppError(StatusCodes.BAD_REQUEST, 'Resolution is required')
    }


    const response = await openai.images.generate({
        prompt: payload.prompt,
        n: parseInt(payload.amount, 10),
        size: payload.resolution
    })


    return response.data


}

export const OpenAIService = {
    OpenAIConversation,
    OpenAICode,
    OpenAIImage,
};