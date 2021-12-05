import {  getNextInsertId,
  executeMultiple} from "./dbUtil.js";


export default function(app) {
  const insertIdQuery = `SELECT max(shopping_cart_id) FROM shopping_cart`;

  app.post("/api/shopping_cart", async (req, res) => {
    const {
      shopping_cart
    } = req.body;
    const shopping_cart_id = await getNextInsertId(insertIdQuery);
    const shoppingCart = shopping_cart.map(({
      food_id,
      quantity
    }) => {
      return {
        food_id,
        quantity,
        shopping_cart_id
      };
    });
    const statement = `Insert into
      Shopping_cart (Shopping_cart_id,Quantity,Food_id)
      values (:shopping_cart_id, :quantity, :food_id)
    `;
    const result = await executeMultiple(statement, shoppingCart);
    res.header("Access-Control-Allow-Origin", "*");
    res.send(JSON.stringify(shoppingCart));
  });
};


