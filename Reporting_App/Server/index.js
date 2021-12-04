const express = require('express');
const app = express();
app.use(express.json())
const oracledb = require('oracledb');
let connection;

async function fetchData(req, res) {
  try {
    let row_count;

    connection = await fetchConnection();
    console.log("Successfully connected to Oracle Database");

    let query = `SELECT a.state, count(a.state) from address a group by a.state `

    // let query = 'variable cursor_output refcursor; exec fetchdata(:cursor_output)';

    result = await connection.execute( query, [],
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
const simpleExecute= (statement, binds = [], opts = {}) => {
  return new Promise(async (resolve, reject) => {
    let conn;

    try {
      conn = await oracledb.getConnection({
        user: "ACAGAANA",
        password: "Fa00764577",
        connectionString: "(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = csdb2.csc.villanova.edu)(PORT = 1521))(CONNECT_DATA =(SID= ORCL)))"
      });;
      conn.autoCommit = true;

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

app.get("/api/building", async (req, res) => {
  console.log("pasing through");
  const example_building = {
    building_id: 101,
    building_name: "falvey"
  };
  const statement = `Insert into Building values (101, 'falvey' )`;
  const result = await simpleExecute(statement);
  console.log(example_building);
  res.send(JSON.stringify(example_building));
});
app.get("/api/admin/", (req, res) => {
	fetchData(req, res);
});

app.post("/api/signup", async (req, res) => {
  const {
    first_name,
    middle_name,
    last_name,
    building_id,
    room_num,
    phone,
    email
  }  = req.body;
  console.log("pasing through", req.body);
  // const example_customer = {
  //   first_name: "bob",
  //   middle_name: "the",
  //   last_name: "builder",
  //   building_id: 3,
  //   room_num: "B10",
  //   phone: 4342348695,
  //   email: "test@gmail.com",
  // };
  const customer = {
    first_name,
    middle_name,
    last_name,
    building_id,
    room_num,
    phone,
    email
  };
  const statement = `Insert INTO CUSTOMER (First_name,Middle_name,Last_name,Building_id,Room_num,Phone,Email) ` +
  `Values (:first_name, :middle_name, :last_name, :building_id, :room_num, :phone, :email) returning customer_id
  into :customer_id`;
  // const statement = `Insert into CUSTOMER Values (7, 'E12', 8153074332, 'kyoko.vajnar@villanova.edu','Kyoko' , 'X' , 'Vajnar' , 30   )`;
  // console.log("executing statement");
  customer.customer_id = {
    dir: oracledb.BIND_OUT,
    type: oracledb.NUMBER
  }
  const result = await simpleExecute(statement, customer);
  customer.customer_id = result.outBinds.customer_id[0];
  res.send(JSON.stringify(customer));
});

app.post("/api/shopping_cart", (req, res) => {
  const shoppingCart = {
    customer_id: "",
    payment_details_id: "",

    food: [
      {
        quantity,
        food_id
      },
      {
        quantity,
        food_id
      }
    ],
  };
  shoppingCart.food.forEach(({food_id, quantity}) => {

  });
  saveShoppingCart(res);
});
//Insert into Shopping_cart (Shopping_cart_id,Quantity,Food_id) values (1,3,739);
app.listen(3001, () => {
	console.log("running on port 3001");
});


