export default function(app) {
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
};


