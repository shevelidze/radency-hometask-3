import { type ErrorRequestHandler } from 'express';
import { WebApiError } from '../helpers/errors';

const errorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof WebApiError) {
    res.status(err.status);
    if (err.message !== undefined || err.payload !== undefined) {
      res.json({ message: err.message, payload: err.payload });
    } else res.end();
  } else next(err);
};

export default errorMiddleware;
