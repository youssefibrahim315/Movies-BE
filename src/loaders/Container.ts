import Container from "typedi";
import movie from "../Api/models/movie";
import user from "../Api/models/user";
import category from "../Api/services/category";

export default async () => {
    try {
        Container.set("category", category);
        Container.set("movie", movie);
        Container.set("user", user);
    } catch (error) {
        console.error(`Error \n${error}`);
    }
};
