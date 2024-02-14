import { AdminaccountService } from "../../services/admin/index.js";
import { userService } from "../../services/index.js";
import { envs, StatusError } from "../../config/index.js";

/**
 * This function is used for validating authorization header
 * @param req
 * @param res
 * @param next
 */
export const validateAdminAccessToken = async (req, res, next) => {
  try {
    const token = req.headers["token"] || req.headers["authorization"]?.split(" ")[1];
    if (!token) throw StatusError.forbidden("");

    const decodedData = userService.verifyToken(token, envs.jwt.accessToken.secret);
    if (!decodedData) throw StatusError.unauthorized("");
  //  console.log(decodedData);
    let module = req.baseUrl.substring('/admin/api/v1/'.length);
   //console.log(module);
    let uinfo = await AdminaccountService.infoaccess(decodedData.login_user,module);
 //   console.log(uinfo);
     if (!uinfo[0] || !(uinfo[0].GRUNTID > 0)) throw StatusError.forbidden("");
    req.uinfo = uinfo[0];
    req.userDetails = decodedData;
    req.userDetails.language = "ko";

   // console.log(req.uinfo);
    next();
  } catch (error) {
    next(error);
  }
};
