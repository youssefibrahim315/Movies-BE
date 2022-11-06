import { celebrate, Joi, Segments } from "celebrate";

const CreateCategory = () => {
    return celebrate({
        [Segments.BODY]: Joi.object({
            title: Joi.string().required(),
        }),
    });
};


export default CreateCategory()