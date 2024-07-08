import { RequestHandler, Router } from "express";
import { join } from "path";
import express from "express";
import fs from "fs";
import { combineMiddleware } from "../utils/general";
import { appFrontDir } from "../config";

const htmlMiddleware: RequestHandler = (req, res, next) => {
  fs.readFile(
    join(process.cwd(), appFrontDir, "index.html"),
    "utf8",
    (err, htmlData) => {
      if (err) {
        console.error("Error during file reading", err);

        return res.sendStatus(404).json({
          res,
          json: { message: "Html file not found" },
        });
      }
      res.send(htmlData);
    }
  );
};

const router = Router();

export const frontMiddlware = combineMiddleware(
  router.get(
    /\/*(.png|.css|.js)/,
    express.static(join(process.cwd(), appFrontDir))
  ),
  htmlMiddleware
);
