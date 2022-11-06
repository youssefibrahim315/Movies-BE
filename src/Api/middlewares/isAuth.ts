import { expressjwt } from "express-jwt";
import { Request } from "express";
import {configuration} from '../../config'
import { Algorithm } from "jsonwebtoken";
/**
 * Authorization: Bearer ${JWT}
 */
const getTokenFromHeader = (req: Request) => {
  const authorization = req.headers.authorization;
  if (
    authorization && (authorization.includes("Token") || authorization.includes("Bearer"))
  ) {
    return authorization.split(" ")[1];
  }

  return null;
};

const isAuth = expressjwt({
  secret: configuration.middleware.jwtPublicKey,
  algorithms: [configuration.middleware.jwtAlgorithm as Algorithm],
  getToken: getTokenFromHeader,
});
console.log(isAuth);

export default isAuth;
