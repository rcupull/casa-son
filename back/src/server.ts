import express from "express";
import { router } from "./router";
import cors from "cors";
import { commaSeparateQuery } from "./middlewares/comma-separate-query";
import { frontMiddlware } from "./middlewares/frontMiddlware";

export const app = express();

app.use(cors({ origin: "*", optionsSuccessStatus: 200 }));

app.use(express.json());
app.use(commaSeparateQuery);
app.use(express.urlencoded({ extended: false }));

app.use("/api-services", router);

/**
 * the frontMiddlware mmust be he last to use
 */
app.use(frontMiddlware);
