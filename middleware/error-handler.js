import { CustomAPIError } from "../errors/custom-error.js"
export const errorHandleMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message })

    }
    return res.status(err.status ?? 500).json({ Error: err.message })
}