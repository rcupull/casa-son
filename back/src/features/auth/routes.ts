import { Router } from "express";

import { authHandles } from "./handles";
export const router = Router();
/////////////////////////////////////////////////////////////////

router.route("/auth/sign-in").post(authHandles.post_signIn());
