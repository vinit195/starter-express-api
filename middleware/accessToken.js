import { userService } from "../services/index.js";
import { envs, StatusError } from "../config/index.js";
import { logger } from "../config/index.js";

/**
 * This function is used for validating authorization header
 * @param req
 * @param res
 * @param next
 */
export const validateAccessToken = async (req, res, next) => {
  try {
    const token = req.headers["token"] || req.headers["authorization"]?.split(" ")[1];
    if (!token) throw StatusError.forbidden("");

    const decodedData = userService.verifyToken(token, envs.jwt.accessToken.secret);
    if (!decodedData) throw StatusError.unauthorized("");
    logger.debug(decodedData);
 
    if(decodedData.device_id && decodedData.device_id !='')
    {
      const userDetails = await userService.getlogedinUser(decodedData.MEMBER_NO);
     // console.log('-------------------------' );
      //console.log(userDetails, decodedData.device_id );
      if(userDetails.DEVICE_ID != decodedData.device_id)
      {throw StatusError.unauthorized("");}
    }
  
    // const userDetails = await userService.getByEmailorPhone(decodedData.email);
    // if (!userDetails) throw StatusError.unauthorized("");

    // req["userDetails"] = {
    //   userId: userDetails.id,
    //   name: userDetails.name,
    //   email: userDetails.email,
    // };
    req.userDetails = decodedData;
    req.userDetails.language = "ko";
    res.locals.language = "ko";
    next();
  } catch (error) {
    next(error);
  }
};
