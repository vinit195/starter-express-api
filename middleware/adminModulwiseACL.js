import { AdminaccountService } from "../services/admin/index.js";
import { envs, StatusError } from "../config/index.js";
import { logger } from "../config/index.js";
import * as url  from "url";

/**
 * This function is used for validating authorization header
 * @param req
 * @param res
 * @param next
 */
export const adminModulwiseACL = async (req, res, next) => {
  try {
    let module = req.baseUrl.substring('/admin/api/v1/'.length);
    let access=await AdminaccountService.checkaccess(req.userDetails.MEMBER_NO,module);
    
    console.log(access);
    
    next();
  } catch (error) {
    next(error);
  }
};
