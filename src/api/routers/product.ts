import { Router } from "express";
import { RouterPropsType } from "../type";
import Container from "typedi";
import ProductService from "@/service/productService";

export default ({ app }: RouterPropsType) => {
  const router = Router();
  app.use("/product", router);

  router.post("/addProduct", (req, res, next) => {
    const productServices = Container.get(ProductService);
    productServices.addProduct("redragon keybord", 5160, "user", "ghar");
  });
};
