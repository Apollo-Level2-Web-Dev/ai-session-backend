/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-explicit-any */


import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/AppError";
import { apiLimit } from "../../lib/api-limit";
import { userSubscription } from "../../lib/user-subscription";
import { deepseek } from "../../utils/deepseek";

const DeepseekCode = async (
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

    if (!deepseek.apiKey) {
        throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, 'DeepSeek API key not configured')
    }

    if (!payload.messages) {
        throw new AppError(StatusCodes.BAD_REQUEST, 'Missing messages')
    }

    const freeTrial = await apiLimit.checkApiLimit(userId)
    const isPro = await userSubscription.checkSubscription(userId)

    if (!freeTrial && !isPro) {
        throw new AppError(StatusCodes.FORBIDDEN, 'Free trial limit reached')
    }
    const response = await deepseek.chat.completions.create({
        model: "deepseek-chat",
        messages: [{ role: "system", content: `${codeInstructionMessage} ${payload.messages[0].content}` }],
    })

    if (!isPro) await apiLimit.increaseApiLimit(userId)

    await apiLimit.increaseApiLimit(userId)

    return response.choices[0].message
};
const DeepseekConversation = async (
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

    if (!deepseek.apiKey) {
        throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, 'DeepSeek API key not configured')
    }

    if (!payload.messages) {
        throw new AppError(StatusCodes.BAD_REQUEST, 'Missing messages')
    }

    const freeTrial = await apiLimit.checkApiLimit(userId)
    const isPro = await userSubscription.checkSubscription(userId)

    if (!freeTrial && !isPro) {
        throw new AppError(StatusCodes.FORBIDDEN, 'Free trial limit reached')
    }

    const response = await deepseek.chat.completions.create({
        model: "deepseek-chat",
        messages: [{ role: "system", content: `${conversationInstructionMessage} ${payload.messages[0].content}` }],
    })

    if (!isPro) await apiLimit.increaseApiLimit(userId)

    return response.choices[0].message
}


export const DeepseekService = {
    DeepseekConversation,
    DeepseekCode,
};