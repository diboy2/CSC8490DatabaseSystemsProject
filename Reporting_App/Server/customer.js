export default function(app) {
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
};


