import { NextFunction, Request, Response } from "express";

const filterQueryResult = async (req: Request,res: Response,next: NextFunction) => {
  try {
    const filterQuery = {};
    for (const property in req.query) {
      if(["limit", "page", "order", "orderBy"].includes(property)) continue;
      filterQuery[property] = req.query[property];
    }
    req["filterQueryParams"] = filterQuery;
    return next();
  } catch (e) {
    return next(e);
  }
};

export default filterQueryResult;
