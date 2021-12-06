import {  getNextInsertId,
  simpleExecute} from "./dbUtil.js";


export default function(app) {  
  app.post("/api/shoppingCartInsert", async (req, res) => {
    const {
      food_id,
      quantity,
      dining_place,
      shopping_cart_id
    }  = req.body;
    const shopping_cart = {
      food_id,
      quantity,
      dining_place,
      shopping_cart_id
    };

    const statement = `Insert INTO SHOPPING_CART (food_id,quantity,dining_place,shopping_cart_id) ` +
      `Values (:food_id,:quantity,:dining_place,:shopping_cart_id) `;
    const result = await simpleExecute(statement, shopping_cart);

    console.log(result);

    res.send(JSON.stringify('Successfully inserted the food into the shopping cart'));
  });

  app.get("/api/shoppingCartId", async (req, res) => {

    const statement = `select max(shopping_cart_id) from shopping_cart`;
    const result = await simpleExecute(statement);

    const output = result.rows[0][0];
    console.log(output);

    if(output === null){
      res.send(JSON.stringify(0));
    }
    else{
      res.send(JSON.stringify(output));
    }


  });
};


