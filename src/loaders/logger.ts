import winston, { format } from "winston";
const { printf, colorize } = format;

const vaiLevels = {
  hagdeyaVai: 0,
  ohVaiVaiVai: 1,
  sunVai: 2,
  thickHeyVai: 3,
};

const vaiLevelColors = {
  hagdeyaVai: "red",
  ohVaiVaiVai: "yellow",
  sunVai: "green",
  thickHeyVai: "blue",
};

winston.addColors(vaiLevelColors);

const Logger = winston.createLogger({
  level: "thickHeyVai",
  levels: vaiLevels,
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json(),

    colorize(),

    printf(({ level, message, timestamp }) => {
      return ` [${level}] ${timestamp} : ${message}`;
    })
  ),

  transports: [new winston.transports.Console()],
});

declare module "winston" {
  interface Logger {
    hagdeyaVai: winston.LeveledLogMethod;
    ohVaiVaiVai: winston.LeveledLogMethod;
    sunVai: winston.LeveledLogMethod;
    thickHeyVai: winston.LeveledLogMethod;
  }
}

export default Logger;
