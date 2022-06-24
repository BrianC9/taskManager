export const asyncWrapper = (fnAsync) => {
    return async (req, res, next) => {
        try {
            await fnAsync(req, res, next)
        } catch (error) {
            next(error)
        }
    }
}