import { createLogger, format, transports } from "winston";
const today = new Date();
// Get the year, month, and day components
const year = today.getFullYear();
const month = (today.getMonth() + 1).toString();
const date = parseInt(today.getDate()).toString();

const roomlogger = createLogger({
  transports: [
    new transports.Console({
      format: format.combine(format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }), format.json()),
    }),
    new transports.File({
      filename: `logs/${year}/${month}/${date}/room/access.log`,
      format: format.combine(format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }), format.json()),
    }),
  ],
  exitOnError: false,
});

export { roomlogger };
