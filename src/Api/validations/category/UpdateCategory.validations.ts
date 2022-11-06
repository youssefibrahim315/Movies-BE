import { celebrate, Joi, Segments } from "celebrate";

const UpdateCategory = () => {
    return celebrate({
        [Segments.BODY]: Joi.object({
            title: Joi.string().required(),
        }),
        [Segments.PARAMS]: {
            id: Joi.string().required()
        }
    });
};


export default UpdateCategory()