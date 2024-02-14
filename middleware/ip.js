import requestIp from "request-ip";

export const setIp = async (req, res, next) => {
  try {
    const clientIp = requestIp.getClientIp(req);
    console.log({ clientIp });
    if (Array.isArray(req.body)) {
      // body as array
      for (const bod of req.body) {
        if ("AUPDATE_IP" in bod) {
          bod.AUPDATE_IP = clientIp;
        }
        if ("AINPUT_IP" in bod) {
          bod.AINPUT_IP = clientIp;
        }
      }
      console.log("boddy as arrya");
    } else {
      // body is object
      if ("AUPDATE_IP" in req.body) {
        req.body.AUPDATE_IP = clientIp;
      }
      if ("AINPUT_IP" in req.body) {
        req.body.AINPUT_IP = clientIp;
      }
    }

    next();
  } catch (error) {
    next(error);
  }
};
