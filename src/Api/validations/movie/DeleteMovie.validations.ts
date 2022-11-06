import { celebrate, Joi, Segments } from "celebrate";

const DeleteMovie = () => {
    return celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().required()
        }
    });
};


export default DeleteMovie()