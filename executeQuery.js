import chalk from "chalk";
import { logger } from "../config/index.js";
import { connect, connecte,connect_Admin,connect_LIVE_GANGCHON_K,connect_LIVE_JEJU_E ,connectD} from "../config/index.js";

/**
 *
 * @param {*} query
 * @param {*} bind
 * @param {*} options
 * @returns {rows:[Object]}
 */
async function executeQuery(query, bind = [], options = {}) {
  try {
    let connection = await connect();
    
    let result = await connection.execute(query, bind, options);
    await connection.commit();
    // connection.execute("COMMIT;");
    return result.rows || result.outBinds;
  } catch (error) {
    logger.error(`Error = ${error}`);
    console.log(chalk.redBright(error));
    throw new Error(`Error = ${error}`);
  }
}

async function executeQuerye(query, bind = [], options = {}) {
  try {
    let connectione = await connecte();
    let result = await connectione.execute(query, bind, options);
    await connectione.commit();
    return result.rows || result.outBinds;
  } catch (error) {
    logger.error(`Error = ${error}`);
    console.log(chalk.redBright(error));
    throw new Error(`Error = ${error}`);
  }
}
 
async function executeQueryAdmin(query, bind = [], options = {}) {
  try {
    let connectione = await connect_Admin();
    let result = await connectione.execute(query, bind, options);
    await connectione.commit();
    
    return result.rows || result.outBinds;
  } catch (error) {
    logger.error(`Error = ${error}`);
    console.log(chalk.redBright(error));
    throw new Error(`Error = ${error}`);
  }
}

async function commitQuerye() {
  try {
    let connectione = await connecte();
    connectione.commit();
  } catch (error) {
    logger.error(`Error = ${error}`);
    console.log(chalk.redBright(error));
    throw new Error(`Error = ${error}`);
  }
}


async function executeQueryLive_K(query, bind = [], options = {}) {
  try {
    let connection = await connect_LIVE_GANGCHON_K();
    
    let result = await connection.execute(query, bind, options);
    await connection.commit();
    // connection.execute("COMMIT;");
    return result.rows || result.outBinds;
  } catch (error) {
    logger.error(`Error = ${error}`);
    console.log(chalk.redBright(error));
    throw new Error(`Error = ${error}`);
  }
}

async function executeQueryLive_E(query, bind = [], options = {}) {
  try {
    let connection = await connect_LIVE_JEJU_E();
    
    let result = await connection.execute(query, bind, options);
    await connection.commit();
    // connection.execute("COMMIT;");
    return result.rows || result.outBinds;
  } catch (error) {
    logger.error(`Error = ${error}`);
    console.log(chalk.redBright(error));
    throw new Error(`Error = ${error}`);
  }
}
async function executeQueryD(query, bind = [], options = {}) {
  try {
    let connection = await connectD();
    
    let result = await connection.execute(query, bind, options);
    await connection.commit();
    // connection.execute("COMMIT;");
    return result.rows || result.outBinds;
  } catch (error) {
    logger.error(`Error = ${error}`);
    console.log(chalk.redBright(error));
    throw new Error(`Error = ${error}`);
  }
}

export { executeQuery, executeQuerye, executeQueryAdmin,commitQuerye,executeQueryLive_E,executeQueryLive_K ,executeQueryD};
