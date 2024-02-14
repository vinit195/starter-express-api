import { config } from "dotenv";
config();

export const envs = {
  env: process.env.NODE_ENV || "dev",
  port: Number(process.env.NODE_PORT) || 4000,
  enc_key : process.env.ENC_KEY || "219Y75a37T4a29d@f97b^734Sxc59742",
  excelPasswordlottery :process.env.excelPasswordlottery || "PasswordSecure",
  domain : process.env.GS_DOMAIN || "https://ely-win-dev-api.dvconsulting.org/",
  dbk: {
    host: process.env.KC_ORACLE_HOST || "localhost/xepdb1",
    username: process.env.KC_ORACLE_USERNAME || "",
    password: process.env.KC_ORACLE_PASSWORD || "",
  },
  dbe: {
    host: process.env.EL_ORACLE_HOST || "localhost/xepdb1",
    username: process.env.EL_ORACLE_USERNAME || "",
    password: process.env.EL_ORACLE_PASSWORD || "",
  },
  Live_dbk: {
    host: process.env.KC_LIVE_ORACLE_HOST || "localhost/xepdb1",
    username: process.env.KC_LIVE_ORACLE_USERNAME || "",
    password: process.env.KC_LIVE_ORACLE_PASSWORD || "",
  },
  Live_dbe: {
    host: process.env.EL_LIVE_ORACLE_HOST || "localhost/xepdb1",
    username: process.env.EL_LIVE_ORACLE_USERNAME || "",
    password: process.env.EL_LIVE_ORACLE_PASSWORD || "",
  },
  Admin_db: {
    host: process.env.GANGWEB_ORACLE_HOST || "localhost/xepdb1",
    username: process.env.GANGWEB_ORACLE_HOST_ORACLE_USERNAME || "",
    password: process.env.GANGWEB_ORACLE_HOST_ORACLE_PASSWORD || "",
  },
  apiKey: process.env.API_KEY || "7Ji067mE64OQIOuCmOyLnOuCmOuniA==",
  passwordSalt: Number(process.env.PASSWORD_SALT_ROUND) || 12,
  jwt: {
    accessToken: {
      secret: process.env.ACCESS_TOKEN_SECRET || "",
      expiry: Number(process.env.ACCESS_TOKEN_EXPIRED) || 3600,
    },
  },
  kakao: {
    KAKAO_CLIENT_ID: process.env.client_Secret_code,
    client_code: process.env.client_code,
    KAKAO_REDIRECT_URI: process.env.KAKAO_REDIRECT_URI,
  },
  NICE_TOKEN_API: {
    SITE_CODE: process.env.NICE_SITE_CODE || "",
    SITE_PASSWORD: process.env.NICE_SITE_PASSWORD || "",
    MODULE_PATH: process.env.NICE_MODULE_PATH || "",
    RETURN_URL: process.env.NICE_RETURN_URL || "",
    ERROR_URL: process.env.NICE_ERROR_URL || "",
  },
  tosspayment: {
    portoneKey: process.env.PORTONE_API_KEY,
    portonesecret: process.env.PORTONE_API_SECRET,
    clientKey: process.env.TOSS_CLIENT_KEY,
    secretKey: process.env.TOSS_SECRET_KEY,
    murtKey: process.env.TOSS_MURTKEY,
  },
  gs: {
    authkey: process.env.GS_AUTH_KEY,
    affilatecode: process.env.GS_AF_CODE,
    frnchse_code: {
      m: process.env.GS_FRN_CODE_M,
      g: process.env.GS_FRN_CODE_G,
      j: process.env.GS_FRN_CODE_J,
    },
    
    earnpercent: process.env.GS_EARN
  },
};
