import { celebrate, Joi, Segments } from "celebrate";

const DeleteCategory = () => {
    return celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().required()
        }
    });
};


export default DeleteCategory()