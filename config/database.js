import chalk from "chalk";
import oracledb from "oracledb";
import { envs } from "./index.js";
import { readTextFile, writeTextFile } from "../helpers/readWriteFile.js";
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
//console.log(process.platform+' tttttttttttttt')
let clientOpts = {};
if (process.platform === "win32") {
  //Windows

  //libDir : "C:\\oracle\\instantclient_21_10",
  clientOpts = { libDir: "C:\\oracle\\instantclient_21_10" };
  oracledb.initOracleClient(clientOpts);
  // oracledb.initOracleClient({ libDir: 'C:\\oracle\\instantclient_21_10' });
  // console.log('insideeeeee')
} else if (process.platform === "darwin") {
  // Mac
  clientOpts = { libDir: "/Users/prkskrs/downloads/instant_client" };
  oracledb.initOracleClient(clientOpts);
}

// if (process.platform === "linux") {
//   // linux
//   console.log("Its LINUX"); //❌ it should be deleted
//   // oracledb.initOracleClient({
//   //   configDir: "/linux/instantclient_21_9",
//   // });
// }
const filePath = "./src/filename.js";
let existingValue = await readTextFile(filePath);
existingValue = parseInt(existingValue);
console.log(existingValue);

export const connect = async () => {
  try {
    //KC
    let connection = await oracledb.getConnection({
      user: existingValue == 0 ? envs.dbk.username : envs.Live_dbk.username,
      password: existingValue == 0 ? envs.dbk.password : envs.Live_dbk.password,
      connectionString: existingValue == 0 ? envs.dbk.host : envs.Live_dbk.host,
    });
    console.log(
      chalk.green(
        `AWS ORACLE Connection k ${
          existingValue == 0 ? "DEV 🏃 " : "LIVE 🏭  "
        } Established Successfully`,
      ),
    );
    return connection;
  } catch (error) {
    console.log(chalk.redBright("Connection Failed!" + JSON.stringify(error, undefined, 2)));
    console.log(chalk.blueBright("💀⚡Please check your VPN connection."));
  }
};
export const connecte = async () => {
  try {
    //EL
    let connectione = await oracledb.getConnection({
      user: existingValue == 0 ? envs.dbe.username : envs.Live_dbe.username,
      password: existingValue == 0 ? envs.dbe.password : envs.Live_dbe.password,
      connectionString: existingValue == 0 ? envs.dbe.host : envs.Live_dbe.host,
    });
    console.log(
      chalk.green(
        `AWS ORACLE Connection e ${
          existingValue == 0 ? "DEV 🏃 " : "LIVE 🏭 "
        } Established Successfully`,
      ),
    );
    return connectione;
  } catch (error) {
    console.log(chalk.redBright("Connection Failed!" + JSON.stringify(error, undefined, 2)));
    console.log(chalk.blueBright("💀⚡Please check your VPN connection."));
  }
};

export const connect_Admin = async () => {
  try {
    let connectione = await oracledb.getConnection({
      user: envs.Admin_db.username,
      password: envs.Admin_db.password,
      connectionString: envs.Admin_db.host,
    });
    console.log(chalk.green(`AWS ORACLE Connection admin db Established Successfully`));
    return connectione;
  } catch (error) {
    console.log(chalk.redBright("Connection Failed!" + JSON.stringify(error, undefined, 2)));
    console.log(chalk.blueBright("💀⚡Please check your VPN connection."));
  }
};

export const connect_LIVE_JEJU_E = async () => {
  try {
    let connectione = await oracledb.getConnection({
      user: envs.Live_dbe.username,
      password: envs.Live_dbe.password,
      connectionString: envs.Live_dbe.host,
    });
    console.log(chalk.green("🏪 AWS ORACLE Connection Live JEJU Established Successfully"));
    return connectione;
  } catch (error) {
    console.log(chalk.redBright("Connection Failed!" + JSON.stringify(error, undefined, 2)));
    console.log(chalk.blueBright("💀⚡Please check your VPN connection."));
  }
};

export const connect_LIVE_GANGCHON_K = async () => {
  try {
    let connectione = await oracledb.getConnection({
      user: envs.Live_dbk.username,
      password: envs.Live_dbk.password,
      connectionString: envs.Live_dbk.host,
    });
    console.log(chalk.green("🏪 AWS ORACLE Connection Live Gangchon Established Successfully"));
    return connectione;
  } catch (error) {
    console.log(chalk.redBright("Connection Failed!" + JSON.stringify(error, undefined, 2)));
    console.log(chalk.blueBright("💀⚡Please check your VPN connection."));
  }
};
export const connectD = async () => {
  try {
    existingValue = 0;
    let connection = await oracledb.getConnection({
      user: existingValue == 0 ? envs.dbk.username : envs.Live_dbk.username,
      password: existingValue == 0 ? envs.dbk.password : envs.Live_dbk.password,
      connectionString: existingValue == 0 ? envs.dbk.host : envs.Live_dbk.host,
    });
    console.log(
      chalk.green(
        `AWS ORACLE Connection k ${
          existingValue == 0 ? "GANGWEB 🏃 " : "LIVE 🏭  "
        } Established Successfully`,
      ),
    );
    return connection;
  } catch (error) {
    console.log(chalk.redBright("Connection Failed!" + JSON.stringify(error, undefined, 2)));
    console.log(chalk.blueBright("💀⚡Please check your VPN connection."));
  }
};
