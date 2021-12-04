export default function(app) {
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
  } finally{
    console.log(' Finally');
  }
    connection.close();
  });
}


