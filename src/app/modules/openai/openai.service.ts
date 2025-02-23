/* eslint-disable @typescript-eslint/no-explicit-any */


import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/AppError";
import { apiLimit } from "../../lib/api-limit";
import { userSubscription } from "../../lib/user-subscription";
import { openai } from "../../utils/openai";

const OpenAICode = async (
    userId: string,
    payload: any
) => {

    const codeInstructionMessage = {
        content: "You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations.",
        role: "system"
    }


    if (!userId) {
        throw new AppError(StatusCodes.UNAUTHORIZED, 'Unauthorized')
    }

    if (!openai.apiKey) {
        throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, 'OpenAI API key not configured')
    }

    if (!payload.messages) {
        throw new AppError(StatusCodes.BAD_REQUEST, 'Missing messages')
    }

    const freeTrial = await apiLimit.checkApiLimit(userId)
    const isPro = await userSubscription.checkSubscription(userId)

    if (!freeTrial && !isPro) {
        throw new AppError(StatusCodes.FORBIDDEN, 'Free trial limit reached')
    }

    const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [codeInstructionMessage, ...payload.messages],
    })

    if (!isPro) await apiLimit.increaseApiLimit(userId)

    await apiLimit.increaseApiLimit(userId)

    return response.choices[0].message
};
const OpenAIConversation = async (
    userId: string,
    payload: any
) => {

    const conversationInstructionMessage = {
        content: "You are a conversation generator. You must answer in complete sentences.",
        role: "system"
    }

    if (!userId) {
        throw new AppError(StatusCodes.UNAUTHORIZED, 'Unauthorized')
    }

    if (!openai.apiKey) {
        throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, 'OpenAI API key not configured')
    }

    if (!payload.messages) {
        throw new AppError(StatusCodes.BAD_REQUEST, 'Missing messages')
    }

    const freeTrial = await apiLimit.checkApiLimit(userId)
    const isPro = await userSubscription.checkSubscription(userId)

    if (!freeTrial && !isPro) {
        throw new AppError(StatusCodes.FORBIDDEN, 'Free trial limit reached')
    }

    const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [conversationInstructionMessage, ...payload.messages],
    })

    if (!isPro) await apiLimit.increaseApiLimit(userId)

    return response.choices[0].message
}
const OpenAIImage = async (
    userId: string,
    payload: any
) => {


    if (!userId) {
        throw new AppError(StatusCodes.UNAUTHORIZED, 'Unauthorized')
    }

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

    const freeTrial = await apiLimit.checkApiLimit(userId)
    const isPro = await userSubscription.checkSubscription(userId)

    if (!freeTrial && !isPro) {
        throw new AppError(StatusCodes.FORBIDDEN, 'Free trial limit reached')
    }

    const response = await openai.images.generate({
        prompt: payload.prompt,
        n: parseInt(payload.amount, 10),
        size: payload.resolution
    })

    if (!isPro) await apiLimit.increaseApiLimit(userId)

    return response.data


}


export const OpenAIService = {
    OpenAIConversation,
    OpenAICode,
    OpenAIImage,
};