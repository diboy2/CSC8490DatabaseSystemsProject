import oracledb from 'oracledb';
import {  getNextInsertId,
  simpleExecute} from "./dbUtil.js";

export default function(app) {
  const insertIdQuery = `SELECT max(customer_id) FROM customer`;
  app.post("/api/customer", async (req, res) => {
    const {
      first_name,
      middle_name,
      last_name,
      building_id,
      room_num,
      phone,
      email
    }  = req.body;
    const customer = {
      first_name,
      middle_name,
      last_name,
      building_id,
      room_num,
      phone,
      email
    };
    customer.customer_id = await getNextInsertId(insertIdQuery);
    const statement = `Insert INTO CUSTOMER (First_name,Middle_name,Last_name,Building_id,Room_num,Phone,Email, Customer_id) ` +
      `Values (:first_name, :middle_name, :last_name, :building_id, :room_num, :phone, :email, :customer_id) `;
    const result = await simpleExecute(statement, customer);
    res.header("Access-Control-Allow-Origin", "*");
    res.send(JSON.stringify(customer));
  });

  app.get("/api/customer/:customer_id/addresses", async (req, res) => {
    const {
      customer_id
    } = req.params;
    const bindings = {
      customer_id
    };
    const statement = `SELECT
        c.first_name || ' ' || c.middle_name || ' ' || c.last_name AS customer_name,
        a.address_name,
        a.street,
        a.address2,
        a.city,
        a.state,
        a.zip_code
      FROM CUSTOMER c, Address a
      WHERE c.customer_id = a.customer_id
      AND c.customer_id = :customer_id
    `;
    const result = await simpleExecute(statement, bindings, {
      outFormat: oracledb.OUT_FORMAT_OBJECT
    });
    res.header("Access-Control-Allow-Origin", "*");
    res.send(JSON.stringify(result.rows));
  });
};


