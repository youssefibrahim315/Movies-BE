import { NextFunction, Response, Request, Router } from "express";
import Container from "typedi";
import { IListModelSchema } from "../interfaces";
import list from "../services/list";
const route = Router();
Container.set("list", list);
const listService = Container.get(list);

export default (app: Router) => {
  app.use("/list", route);
  route.get("/userList/:userId", async (req: Request, res: Response, next: NextFunction) => {
    const getMovie:IListModelSchema[] = await listService.getList(req.params.userId);
    res.status(200).send(getMovie);
  });
  route.post("/", async (req: Request, res: Response, next: NextFunction) => {
    const list:IListModelSchema = req.body
    const MovieDetails:IListModelSchema = await listService.createList(list);
    res.status(200).send(MovieDetails);
  });
  route.patch("/:listId", async (req: Request, res: Response, next: NextFunction) => {
    const list:IListModelSchema = req.body
    const MovieDetails:IListModelSchema = await listService.updateListName(req.params.listId,list);
    res.status(200).send(MovieDetails);
  });
  route.patch("/movies/:listId", async (req: Request, res: Response, next: NextFunction) => {
    const list:IListModelSchema = req.body
    const MovieDetails:IListModelSchema = await listService.updateListMovie(req.params.listId,list);
    res.status(200).send(MovieDetails);
  });
  route.delete("/:listId", async (req: Request, res: Response, next: NextFunction) => {
    const MovieDetails:IListModelSchema = await listService.deleteList(req.params.listId);
    res.status(200).send(MovieDetails);
  });
};
