// dotenv lib is use for the configuration of the environment

import dotenv from "dotenv";

dotenv.config(); //adds the variable to the .env file to environment

// returns object of the env setup variables
export default {
  port: process.env.PORT,
  MONGO_URL: process.env.MONGO_URL,
};
