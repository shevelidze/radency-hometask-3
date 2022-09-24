import { RequestHandler } from 'express';
import { AnyObjectSchema, ValidationError } from 'yup';

export default function generateValidationMiddleware(
  bodySchema: AnyObjectSchema
): RequestHandler {
  return (req, res, next) => {
    try {
      req.body = bodySchema.validateSync(req.body, { stripUnknown: false });
      next();
    } catch (e) {
      if (e instanceof ValidationError)
        res.status(400).json({
          errors: e.errors,
        });
      else throw e;
    }
  };
}
