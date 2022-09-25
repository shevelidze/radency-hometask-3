import { RequestHandler } from 'express';
import { AnyObjectSchema, ValidationError } from 'yup';

export default function generateValidationMiddleware({
  bodySchema,
  paramsSchema,
}: {
  bodySchema?: AnyObjectSchema;
  paramsSchema?: AnyObjectSchema;
}): RequestHandler {
  return (req, res, next) => {
    try {
      if (bodySchema !== undefined)
        req.body = bodySchema.validateSync(req.body, { stripUnknown: false });

      if (paramsSchema !== undefined)
        paramsSchema.validateSync(req.params, {
          stripUnknown: false,
        });

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
