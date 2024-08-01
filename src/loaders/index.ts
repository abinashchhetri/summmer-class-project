import user from "@/modules/user";
import dependencyInjection from "./dependencyInjection";
import express from "./express";
import Logger from "./logger";
import mongo from "./mongo";
import { ExpressLoaderType } from "./types";
import product from "@/modules/product";
import Container from "typedi";
import { Logger as winstonLogger } from "winston";
import Authservices from "@/service/auth";

export default async ({ server }: ExpressLoaderType) => {
  try {
    await mongo();
    Logger.sunVai("MONGO LODED");

     express({ server });
    Logger.sunVai("EXPRESS LODED");

     dependencyInjection([
      { name: "UserModel", model: user },
      { name: "ProductModel", model: product },
    ]);
    Logger.sunVai("Dependency Injected");

    const logger: winstonLogger = Container.get("Logger");
    const authService = Container.get(Authservices);
    if (authService) {
      logger.sunVai(authService.debuging);
    }
    // authService.debuging();

    logger.ohVaiVaiVai("instance vako chai hai ");
  } catch (error) {
    Logger.hagdeyaVai(error);
  }
};
