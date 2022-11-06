import { celebrate, Joi, Segments } from "celebrate";

const deleteUser = () => {
    return celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().required()
        }
    });
};


export default deleteUser()