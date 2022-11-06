import { NextFunction, Response, Request, Router } from "express";
import Container from "typedi";
import { IUserModelSchema } from "../../interfaces";
import generateToken from "../../utils/generateAuthToken";
import isAuth from "../middlewares/isAuth";
import user from "../services/user";
import createUserValidations from "../validations/users/createUser.validations";
import LogInValidations from "../validations/users/LogIn.validations";
const route = Router();
const userService = Container.get(user);

export default (app: Router) => {
  app.use("/user", route);

  route.post("/login", LogInValidations, async (req: Request, res: Response, next: NextFunction) => {
    const User: IUserModelSchema = req.body
    const isExist: IUserModelSchema = await userService.authorization(User);
    res.status(200).send(isExist);
  });

  route.post("/", createUserValidations, async (req: Request, res: Response, next: NextFunction) => {
    const User: IUserModelSchema = req.body
    const UserDetails: IUserModelSchema = await userService.createUser(User);
    const token = await generateToken(UserDetails, 3, "hour");

    res.status(200).send({ UserDetails, token });
  });
  route.get("/:userId", isAuth, async (req: Request, res: Response, next: NextFunction) => {
    const User: IUserModelSchema = await userService.getUserById(req.params.userId);
    res.status(200).send(User);
  });
  route.patch("/:userId", isAuth, async (req: Request, res: Response, next: NextFunction) => {
    const User: IUserModelSchema = req.body
    const UserDetails: IUserModelSchema = await userService.patchUser(req.params.userId, User);
    res.status(200).send(UserDetails);
  });
  route.delete("/:userId", isAuth, async (req: Request, res: Response, next: NextFunction) => {
    const UserDetails: IUserModelSchema = await userService.deleteUser(req.params.userId);
    res.status(200).send(UserDetails);
  });



  route.get("/", isAuth, async (req: Request, res: Response, next: NextFunction) => {
    const User: IUserModelSchema[] = await userService.getAllUsers();
    res.status(200).send(User);
  });
};
