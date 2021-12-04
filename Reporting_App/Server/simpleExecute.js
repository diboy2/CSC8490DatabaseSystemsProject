const oracledb = require('oracledb');
oracledb.initOracleClient({libDir: "C:\\Users\\Bikal\\Desktop\\Fall 2021\\oracles\\instantclient_21_3"});

const simpleExecute= (statement, binds = [], opts = {}) => {
  return new Promise(async (resolve, reject) => {
    let conn;

    try {
      conn = await oracledb.getConnection({
        user: "blamichh",
        password: "Fa02307519",
        connectionString: "(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = csdb2.csc.villanova.edu)(PORT = 1521))(CONNECT_DATA =(SID= ORCL)))" }
        );

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

export default simpleExecute;