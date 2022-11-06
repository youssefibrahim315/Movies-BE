import { celebrate, Joi, Segments } from "celebrate";

const createUser = () => {
    return celebrate({
        [Segments.BODY]: Joi.object({
            userName: Joi.string().required(),
            fullName: Joi.string().required(),
            email: Joi.string().required(),
            password: Joi.string().required(),
            birthDate: Joi.date().required(),
            myFavorite: Joi.array().optional(),
            lastRated: Joi.array().optional()
        })
    })
}
export default createUser()