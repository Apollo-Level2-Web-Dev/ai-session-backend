import { StatusCodes } from 'http-status-codes'
import { MAX_FREE_COUNTS } from '../constants'
import AppError from '../errors/AppError'
import { UserApiLimit } from '../modules/userApiLimit/userApiLimit.model'

const increaseApiLimit = async (userId: string) => {

    if (!userId) {
        throw new AppError(StatusCodes.UNAUTHORIZED, 'Unauthorized')
    }

    const apiLimit = await UserApiLimit.findOne({
        userId
    })

    if (apiLimit) {
        await UserApiLimit.updateOne({
            userId,
            count: apiLimit.count + 1
        })
    } else {
        await UserApiLimit.create({
            userId,
            count: 1
        })
    }
}

const checkApiLimit = async (userId: string) => {

    if (!userId) {
        return false
    }

    const apiLimit = await UserApiLimit.findOne({
        userId
    })

    if (!apiLimit || apiLimit.count < MAX_FREE_COUNTS) {
        return true
    } else return false
}

const getApiLimitCount = async (userId: string) => {

    if (!userId) {
        return 0
    }

    const apiLimit = await UserApiLimit.findOne({
        userId
    })

    if (!apiLimit) {
        return 0
    }

    return apiLimit.count
}

export const apiLimit = {
    increaseApiLimit,
    checkApiLimit,
    getApiLimitCount
}

