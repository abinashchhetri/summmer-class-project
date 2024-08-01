import { Router } from "express";
import auth from "./routers/auth";
import product from "./routers/product";

// this is the file where the routing of different api happans

export default () => {
  const router = Router();
  auth({ app: router }), product({ app: router });
  return router;
};
