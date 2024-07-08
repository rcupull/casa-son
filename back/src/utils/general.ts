import { RequestHandler } from "../types/general";

export const combineMiddleware = (...mids: Array<RequestHandler>) => {
  return mids.reduce(function (a, b) {
    return function (req, res, next) {
      a(req, res, function (err) {
        if (err) {
          return next(err);
        }
        b(req, res, next);
      });
    };
  });
};
