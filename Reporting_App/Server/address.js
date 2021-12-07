import { getNextInsertId, simpleExecute} from "./dbUtil.js";

export default function(app) {
  const insertIdQuery = `select max(address_id) from address`;
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
    address.address_id = await getNextInsertId(insertIdQuery);
    const statement = `Insert INTO ADDRESS (address_id, address_name,address2,city,state,street,zip_code,address_type, customer_id) ` +
        `Values (:address_id, :address_name,:address2,:city,:state,:street,:zip_code,:address_type, :customer_id)`;
    const result = await simpleExecute(statement, address);
    res.header("Access-Control-Allow-Origin", "*");
    res.send(JSON.stringify(address));
  });

  
}


