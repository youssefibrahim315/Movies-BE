import { celebrate, Joi, Segments } from "celebrate";

const LogInValidation = () => {
    return celebrate({
        [Segments.BODY]: Joi.object({
            email: Joi.string().required().label("Email"),
            password: Joi.string().required().label("Password"),
        }),
    })
}


export default LogInValidation();