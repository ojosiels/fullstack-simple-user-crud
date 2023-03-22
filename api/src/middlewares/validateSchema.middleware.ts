import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";
import { AppError } from "../errors";

const validateSchemaMiddleware =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated: object = await schema.validate(req.body, {
        stripUnknown: true,
      });

      req.body = validated;

      next();
    } catch (err: any) {
      throw new AppError(err.errors[0], 400);
    }
  };

export default validateSchemaMiddleware;
