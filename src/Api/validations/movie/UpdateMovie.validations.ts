import { celebrate, Joi, Segments } from "celebrate";

const UpdateMovie = () => {
    return celebrate({
        [Segments.BODY]: Joi.object({
            name: Joi.string().required(),
            description: Joi.string().required(),
            imageUrl: Joi.string().required(),
            rate: Joi.object({
                userId: Joi.string().required(),
                vote: Joi.number().min(0).max(10).required(),
            }).optional(),
            categoriesIds: Joi.array().required(),
        }),
        [Segments.PARAMS]: {
            id: Joi.string().required()
        }
    });
};


export default UpdateMovie()