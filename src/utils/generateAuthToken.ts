import jwt, { Algorithm } from "jsonwebtoken";
import { IUserModelSchema } from "../interfaces";
import { configuration } from "../config";
import { getTimeStamp } from "./timeStamp";

const generateToken = async function (dataPayload: IUserModelSchema, duration = 60, span: "day" | "hour" | "minute" | "second" = "day"): Promise<any> {
  let tokenPayload;
  const exp =await getTimeStamp(duration, span);
  tokenPayload = {
    userId: dataPayload._id.toString(),
    exp: exp / 1000,
  };  
  const token = await jwt.sign(
    tokenPayload,
    configuration.middleware.jwtPrivateKey,
    { algorithm: configuration.middleware.jwtAlgorithm as Algorithm }
  );

  return token;
}

export default generateToken