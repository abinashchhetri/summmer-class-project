import { Router } from "express";
import { RouterPropsType } from "../type";
import Logger from "@/loaders/logger";

import Container from "typedi";
import Authservices from "@/service/auth";

const router = Router();
export default ({ app }: RouterPropsType) => {
  app.use("/auth", router);

  router.post("/login", async (req, res, next) => {
    const { email, password } = req.body;

    try {
      const authService = Container.get(Authservices);
      const data = await authService.login(email, password);

      res.json(data);
    } catch (error) {
      next(error);
    }
  });

  router.post("/register", (req, res, next) => {
    const { email, password } = req.body;

    try {
      const authService = Container.get(Authservices);
      const data = authService.register(email, password);

      res.status(200).json(data).end();
    } catch (error) {
      next(error);
    }
  });
};
