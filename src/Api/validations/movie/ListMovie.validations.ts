import { celebrate, Joi, Segments } from "celebrate";

const ListMovie = () => {
    return celebrate({
        [Segments.QUERY]: Joi.object({
            order: Joi.string().valid("ascend", "descend").optional().label("order"),
            orderBy: Joi.string().optional().label("orderBy"),
            page: Joi.string().optional().label("page"),
            limit: Joi.string().optional().label("limit"),
            name: Joi.string().optional().label("name"),
            category: Joi.string().optional().label("category"),
            rate: Joi.string().optional().label("rate"),
        }),
    });
};

export default ListMovie()