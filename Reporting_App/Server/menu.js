import oracledb from 'oracledb';
oracledb.initOracleClient({libDir: "C:\\Users\\Bikal\\Desktop\\Fall 2021\\oracles\\instantclient_21_3"});

// oracledb.initOracleClient({libDir: "C:\\Users\\Bikal\\Desktop\\Fall 2021\\oracles\\instantclient_21_3"});


async function fetchData(req, res, dining_id) {
  let connection;

  try {
    let row_count;

    connection = await oracledb.getConnection({ user: "blamichh", password: "Fa02307519", connectionString: "(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = csdb2.csc.villanova.edu)(PORT = 1521))(CONNECT_DATA =(SID= ORCL)))" });

    console.log("Successfully connected to Oracle Database");

    let query = `
    select f.food_id, f.food_price, f.food_name, m.menu_type  from food f
                inner join menu_food_bridge mf on mf.food_id = f.food_id
                inner join menu m on m.menu_id = mf.menu_id
                where mf.menu_id in (select menu_id from menu
                where dining_id = ${dining_id})`


    // let query = `SELECT a.state, count(a.state) from address a group by a.state`
    // let query = `select * from customer`
    console.log(query);

    // let query = 'variable cursor_output refcursor; exec fetchdata(:cursor_output)';

    result = await connection.execute( query, [],
     function(err, result) {
        if (err) {
          return(res.send(err.message));
        }
        console.log('sdfsdfsd',result);
        res.header("Access-Control-Allow-Origin", "*");
        return(res.send(JSON.stringify(result)));
     });

  } catch (err) {
    // return(res.send(err.message));
    // console.log(err);
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
  app.post("/api/menu", (req, res) => {

    const {
      dining_id,   
    } = req.body;

    console.log(dining_id);
    fetchData(req, res, dining_id);
  });
};