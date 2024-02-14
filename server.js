import express from "express";
import bearerToken from "express-bearer-token";
import {
  handleError,
  morganConf,
  connect as dbConnect,
  connecte as dbconnecte,
  connect_Admin,
} from "./config/index.js";
import { errors } from "celebrate";
import cors from "cors";
import i18n from "i18n";
import path, { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { v1Router, AdminRouter } from "./routes/index.js";
import chalk from "chalk";
import helmet from "helmet";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(__dirname);
app.use("/public", express.static(path.join(__dirname, "../public")));

// For read upload files
app.use("/upload", express.static(path.join(__dirname, "../upload")));

/**
 * Basic header configuartion
 * It is recomanded to update this section, depending on application's needs
 */

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://ely-clnt-frnt.dvconsulting.org",
      "https://elysian-frontend.dvconsulting.org",
      "https://elysian-app.dvconsulting.org",
      "https://elysian-admin.dvconsulting.org",
    ],
    methods: ["GET", "POST"],
  }),
);
//app.use(helmet());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});
/**
 * Initilization of internationalization(i18n)
 * default language english.
 */
i18n.configure({
  locales: ["en", "ko"],
  directory: resolve(__dirname, "./assets/locales"),
  register: global,
});
app.use(i18n.init);

/**
 * All express middleware goes here
 * parsing request body
 * `bearerToken` = For `Basic Auth` token
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bearerToken());

/**
 * Logger methods => error, warn, info, debug
 */
app.use(morganConf);

/**
 * Handaling database connection
 */
dbConnect();
dbconnecte();
connect_Admin();
/**
 * Initializing APIs base routes
 */
app.use("/api/v1", v1Router);
app.use("/admin/api/v1", AdminRouter);

/**
 * Default Route
 */
app.get("/", (_req, res) => res.send({ message: "Ok" }));

/**
 * 404 Route
 */
app.get("*", (req, res) => res.status(404).send({ message: "Not found!" }));

/**
 * Overriding the express response
 * ok = 200
 * created = 201
 * noData = 204
 * badRequest = 400
 * forbidden = 403
 * severError = 500
 */
app.use(errors());
app.use(handleError);

app.listen(process.env.NODE_PORT || 4000, function () {
  console.log(
    chalk.yellowBright(
      `🏪 🔥Elysian Backend  is running 🚀 http://localhost:${process.env.NODE_PORT || 4000}/`,
    ),
  );
});
