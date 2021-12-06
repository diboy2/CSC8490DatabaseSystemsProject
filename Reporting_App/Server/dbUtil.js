import oracledb from 'oracledb';
oracledb.initOracleClient({libDir: process.env.ORACLE_CLIENT_DIR && "C:\\Users\\Bikal\\Desktop\\Fall 2021\\oracles\\instantclient_21_3"});

export const executeMultiple = (statement, binds = [], opts = {}) => {
  return new Promise(async (resolve, reject) => {
    let conn;

    try {
      conn = await oracledb.getConnection({
        user: process.env.USERNAME,
        password: process.env.PASSWORD,
        connectionString: "(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = csdb2.csc.villanova.edu)(PORT = 1521))(CONNECT_DATA =(SID= ORCL)))"
      });
      conn.autoCommit = true;

      conn.commit();
      const result = await conn.executeMany(statement, binds, opts);

      conn.commit();
      resolve(result);
    } catch (err) {
      reject(err);
    } finally {
      if (conn) { // conn assignment worked, need to close
        try {
          await conn.close();
        } catch (err) {
          console.log(err);
        }
      }
    }
  });
};

export const simpleExecute = (statement, binds = [], opts = {}) => {
  return new Promise(async (resolve, reject) => {
    let conn;

    try {
      conn = await oracledb.getConnection({
        user: process.env.USERNAME,
        password: process.env.PASSWORD,
        connectionString: "(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = csdb2.csc.villanova.edu)(PORT = 1521))(CONNECT_DATA =(SID= ORCL)))"
      });
      conn.autoCommit = true;

      console.log(statement);

      const result = await conn.execute(statement, binds, opts);

      conn.commit();
      resolve(result);
    } catch (err) {
      reject(err);
    } finally {
      if (conn) { // conn assignment worked, need to close
        try {
          await conn.close();
        } catch (err) {
          console.log(err);
        }
      }
    }
  });
}
export const getNextInsertId = async (query) => {
  const result = await simpleExecute(query);
  return result.rows[0][0] + 1;
};
export default {
  executeMultiple,
  getNextInsertId,
  simpleExecute
};