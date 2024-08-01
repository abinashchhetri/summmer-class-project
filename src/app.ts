import express from "express";
import config from "./config";
import Logger from "./loaders/logger";
import loaders from "./loaders";
import "reflect-metadata";

async function startSurver() {
  const server = express();

  await loaders({ server });

  server.listen(config.port, () => {
    Logger.sunVai(`server start at ${config.port}`);
  });
}

startSurver();
