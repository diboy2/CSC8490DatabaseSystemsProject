import dotenv from 'dotenv'
dotenv.config();
import paymentInformation from "./paymentInformation.js";
import address from "./address.js";
import customer from "./customer.js";
import shoppingCart from './shoppingCart.js';
import app from "./app.js";

customer(app);
address(app);
paymentInformation(app);
shoppingCart(app);

app.listen(3001, () => {
	console.log("running on port 3001");
});


