import dotenv from 'dotenv'
dotenv.config();
import paymentInformation from "./paymentInformation.js";
import address from "./address.js";
import customer from "./customer.js";
import reservation from './reservation.js';
import app from "./app.js";
import menu from "./menu.js";
import shoppingCart from "./shoppingCart.js";


customer(app);
address(app);
paymentInformation(app);
reservation(app);
menu(app);
shoppingCart(app);



app.listen(3001, () => {
	console.log("running on port 3001");
});


