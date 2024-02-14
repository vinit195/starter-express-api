import { logger } from "../config/index.js";
export const midLogger = async (req, res, next) => {
  try {
    let request = {
      headers: req.headers,
      host: req.headers.host,
      baseUrl: req.baseUrl,
      url: req.url,
      method: req.method,
      body: req.body,
      params: req?.params,
      query: req?.query,
    };

    let response = {
      headers: res.getHeaders(),
      statusCode: res.statusCode,
    };
    logger.info(
      `Received a request ${JSON.stringify(request)}  with response ${JSON.stringify(response)}`,
    );

    next();
  } catch (error) {
    next(error);
  }
};