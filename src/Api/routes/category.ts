import { celebrate, Joi, Segments } from "celebrate";
import { NextFunction, Response, Request, Router } from "express";
import Container from "typedi";
import { ICategory } from "../../interfaces/ICategory";
import filterQueryResult from "../middlewares/filterQuery";
import isAuth from "../middlewares/isAuth";
import category from "../services/category";
import CreateCategoryValidations from "../validations/category/CreateCategory.validations";
import DeleteCategoryValidations from "../validations/category/DeleteCategory.validations";
import ListCategoryValidations from "../validations/category/ListCategory.validations";
import UpdateCategoryValidations from "../validations/category/UpdateCategory.validations";

const route = Router();
const categoryService = Container.get(category);

export default (app: Router) => {
  app.use("/category", route);
  route.get("/", isAuth, ListCategoryValidations, filterQueryResult, async (req: Request, res: Response, next: NextFunction) => {
    const filterationFeilds = req["filterQueryParams"];

    const getCategory: ICategory[] = await categoryService.getCategory(filterationFeilds);
    res.status(200).send(getCategory);
  });
  route.post("/", isAuth, CreateCategoryValidations, async (req: Request, res: Response, next: NextFunction) => {
    const category: ICategory = req.body
    const CategoryDetails: ICategory = await categoryService.createCategory(category);
    res.status(200).send(CategoryDetails);
  });
  route.patch("/:id", isAuth, UpdateCategoryValidations, async (req: Request, res: Response, next: NextFunction) => {
    const category: ICategory = req.body
    const CategoryDetails: ICategory = await categoryService.patchCategory(req.params.id, category);
    res.status(200).send(CategoryDetails);
  });
  route.delete("/:id", isAuth,DeleteCategoryValidations, async (req: Request, res: Response, next: NextFunction) => {
    const CategoryDetails: ICategory = await categoryService.deleteCategory(req.params.id);
    res.status(200).send(CategoryDetails);
  });

};

