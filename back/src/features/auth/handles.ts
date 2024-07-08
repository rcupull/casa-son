import { RequestHandler } from "../../types/general";
import { withTryCatch } from "../../utils/error";

const post_signIn: () => RequestHandler = () => {
  return (req, res) => {
    withTryCatch(req, res, async () => {
      res.send({
        message: "Hola Katy, esto viene del back",
      });
    });
  };
};

export const authHandles = {
  post_signIn,
};
