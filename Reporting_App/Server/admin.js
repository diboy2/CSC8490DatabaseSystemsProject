import oracledb from 'oracledb';

async function fetchData(req, res) {
  let connection;

  try {
    let row_count;

    connection = await oracledb.getConnection({ user: "blamichh", password: "Fa02307519", connectionString: "(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = csdb2.csc.villanova.edu)(PORT = 1521))(CONNECT_DATA =(SID= ORCL)))" });

    console.log("Successfully connected to Oracle Database");
    let query = `SELECT a.state, count(a.state) from address a group by a.state `

    // let query = 'variable cursor_output refcursor; exec fetchdata(:cursor_output)';

    result = await connection.execute( query, {},
     function(err, result) {
        if (err) {
          return(err.message);
        }
        console.log(result.rows);
        res.header("Access-Control-Allow-Origin", "*");
        return(res.send(JSON.stringify(result.rows, null, 2)));
     });

  } catch (err) {
    return(res.send(err.message));
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        return(res.send(err.message));
      }
    }
  }
}



export default function(app) {
  app.get("/api/admin/", (req, res) => {
    fetchData(req, res);
  });
};
