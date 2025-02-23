import config from "../config";

export function absoluteUrl(path: string) {
    return `${config.public_base_url}${path}`
}