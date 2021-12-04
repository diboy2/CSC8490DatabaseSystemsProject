const express = require('express');
const app = express();
app.use(express.json())
const oracledb = require('oracledb');
oracledb.initOracleClient({libDir: "C:\\Users\\Bikal\\Desktop\\Fall 2021\\oracles\\instantclient_21_3"});

app.use(function(req, res, next) {
   res.header(`Access-Control-Allow-Origin`, `*`)
   res.header(`Access-Control-Allow-Credentials`, true)
   res.header(
      `Access-Control-Allow-Headers`,
      `Origin, X-Requested-With, Content-Type, Accept`
   )
   next();
});


async function fetchData(req, res) {
  let connection;
  
  try {
    let row_count; 

    connection = await oracledb.getConnection({ user: "blamichh", password: "Fa02307519", connectionString: "(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = csdb2.csc.villanova.edu)(PORT = 1521))(CONNECT_DATA =(SID= ORCL)))" });

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

const  simpleExecute= (statement, binds = [], opts = {}) => {
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

  const customer = {
    first_name,
    middle_name,
    last_name,
    building_id,
    room_num,
    phone,
    email
  };

  let connection;
  let insert_id;
  try{
  connection = await oracledb.getConnection({ user: "blamichh", password: "Fa02307519", connectionString: "(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = csdb2.csc.villanova.edu)(PORT = 1521))(CONNECT_DATA =(SID= ORCL)))" });
  insert_id = await connection.execute(
      `SELECT max(customer_id)
       FROM customer`,
      [],  
     async function(err, result) {
        if (err) {
          console.log(err.message);       
          return;
        }              

        insert_id = result.rows[0][0] + 1;
        customer.customer_id = insert_id;

        console.log('Attemtping to insert to customer id: ', insert_id);

        const statement = `Insert INTO CUSTOMER (First_name,Middle_name,Last_name,Building_id,Room_num,Phone,Email, Customer_id) ` +
        `Values (:first_name, :middle_name, :last_name, :building_id, :room_num, :phone, :email, :customer_id) `;

      try {
        customer.customer_id = insert_id;
        const result = await simpleExecute(statement, customer);
        res.header("Access-Control-Allow-Origin", "*");
        res.send(JSON.stringify(customer));
        } catch (err) {
          console.log(err);
          res.send(err.message);
        } finally {
          console.log('Finally for insert into customer ::: ');       
        }
     });
}
catch(err){
  console.log(err.message);
}finally{
  console.log(' Finally');
}
  connection.close();
  
  });

app.post("/api/address", async (req, res) => {
  const {
    address_name, 
    address2,
    city,
    state,
    street,
    zip_code,
    address_type,   
    customer_id 
  }  = req.body;
  console.log("pasing through address insert endpoint", req.body);

  const address = {
    address_name, 
    address2,
    city,
    state,
    street,
    zip_code,
    address_type,
    customer_id
  };

  let connection;
  let insert_id;
  try{
  connection = await oracledb.getConnection({ user: "blamichh", password: "Fa02307519", connectionString: "(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = csdb2.csc.villanova.edu)(PORT = 1521))(CONNECT_DATA =(SID= ORCL)))" });
  insert_id = await connection.execute(
      `select max(address_id) from address`,
      [],  
     async function(err, result) {
        if (err) {
          console.log(err.message);       
          return;
        }              

        insert_id = result.rows[0][0] + 1;        

        console.log('Attemtping to insert to address id: ', insert_id);

        const statement = `Insert INTO ADDRESS (address_id, address_name,address2,city,state,street,zip_code,address_type, customer_id) ` +
        `Values (:address_id, :address_name,:address2,:city,:state,:street,:zip_code,:address_type, :customer_id)`;

      try {
        address.address_id = insert_id;
        console.log(address);
        const result = await simpleExecute(statement, address);     
        res.header("Access-Control-Allow-Origin", "*");
        res.send(JSON.stringify(address));
        } catch (err) {
          console.log(err);
          res.send(err.message);
        } finally {
          console.log('Finally for insert into address ');       
        }
     });
}
catch(err){
  console.log(err.message);
}finally{
  console.log(' Finally');
}
  connection.close();
  
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


