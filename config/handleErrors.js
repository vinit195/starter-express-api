/* eslint-disable no-unused-vars */
import slackLogsForServerError from "./slackmonitor.js";
export const handleError = (err, req, res, next) => {
  const url = req.protocol + "://" + req.get("host") + req.originalUrl;
  if (err != "Error: forbidden") {
    slackLogsForServerError(err, url, req.method, req.body, req.params, req.query)
      .then((d) => console.log("error sent to slack"))
      .catch((e) => console.log("Error in slack"));
  }
  console.log(err);
  // Handel multer error
  if (err.code === "LIMIT_FILE_SIZE") {
    res.status(400).send({ error: res.__("fileSizeNotMatch") });
  } else if (err.code === "LIMIT_FILE_TYPE") {
    res.status(400).send({ error: res.__("invalidFile") });
  } else if (err.code === "LIMIT_UNEXPECTED_FILE") {
    res.status(400).send({ error: res.__("maximumFileLimit") });
  } else if (err.code === "LIMIT_FIELD_VALUE") {
    res.status(400).send({ error: res.__("maximumFileLimit") });
  } else {
    let message;
    let status;

    if (err.statusCode) {
      message = err.message || "serverError";
      status = err.statusCode;
    } else {
      message = "serverError";
      status = 500;
    }

    res.locals.error = res.__(message);

    res.status(status).send({ error_message: res.__(message) });
  }
};
