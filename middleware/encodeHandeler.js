import { userService } from "../services/index.js";
import { envs, StatusError } from "../config/index.js";
import { logger } from "../config/index.js";
import cryptojs from 'crypto-js';
/**
 * This function is used for validating authorization header
 * @param req
 * @param res
 * @param next
 */
export const encodeHandeler = async (req, res, next) => {
  try {
   
    Object.keys(req.body).forEach( function(key) {
    //  let   encode =  cryptojs.AES.encrypt(req.body[key], envs.enc_key).toString();
    //  let decode=   cryptojs.AES.decrypt(encode, envs.enc_key).toString(cryptojs.enc.Utf8);
        req.body[key]=  cryptojs.AES.decrypt(req.body[key], envs.enc_key).toString(cryptojs.enc.Utf8);
      });
    
    next();
  } catch (error) {
    next(error);
  }
};
