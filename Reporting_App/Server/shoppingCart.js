import {  getNextInsertId,
  executeMultiple, simpleExecute } from "./dbUtil.js";

const makeReservation = async (shopping_cart_id) => {
  const bindings = { shopping_cart_id };
  const statement = `BEGIN CALCULATE_GRAND_TOTAL(:shopping_cart_id);END;`
  return await simpleExecute(statement, bindings);
};

const saveShoppingCart = async (shopping_cart) => {
  const insertIdQuery = `SELECT max(shopping_cart_id) FROM shopping_cart`;
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
  await executeMultiple(statement, shoppingCart);
  return shoppingCart;
};

const saveReservationIds = async ({
  shopping_cart_id,
  customer_id,
  payment_details_id,
  delivery_id
}) => {
  const reservationStatement = `
    UPDATE RESERVATION
      SET DELIVERY_ID = :delivery_id,
      SET PAYMENT_DETAILS_ID = :payment_details_id
    WHERE SHOPPING_CART_ID = :shopping_cart_id
  `;
  const bindings = { shopping_cart_id, payment_details_id, delivery_id };
  const result = await simpleExecute(reservationStatement, bindings);
  console.log(JSON.stringify(result));
  return result;
};

export default function(app) {
  app.post("/api/shopping_cart", async (req, res) => {
    const {
      delivery_id,
      customer_id,
      payment_details_id,
      shopping_cart
    } = req.body;
    const { shopping_cart_id } = await saveShoppingCart(shopping_cart);
    const reservationResult = await makeReservation(shopping_cart_id);
    const saveIdsResult = await saveReservationIds(
      {
        delivery_id,
        shopping_cart_id,
        customer_id,
        payment_details_id
      }
    );
    res.header("Access-Control-Allow-Origin", "*");
    res.send(JSON.stringify(shoppingCart));
  });
};


