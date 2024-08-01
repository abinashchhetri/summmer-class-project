import { json, urlencoded } from "express";
import { ExpressLoaderType } from "./types";
import cors from "cors";
import api from "@/api";
import Logger from "./logger";

export default ({ server }: ExpressLoaderType) => {
  server.get("/status", (req, res) => {
    res.status(200).end();
  });

  server.use(cors());
  server.use(json());
  server.use(urlencoded({ extended: true }));
  server.use("/api", api());

  server.use((req, res, next) => {
    const error = new Error("Not Found");
    error["status"] = 404;

    next(error);
  });

  server.use((error, req, res, next) => {
    console.log(error);
    Logger.hagdeyaVai(error);
    res.status(error.status || 500).json({ message: error.message });
  });
};
