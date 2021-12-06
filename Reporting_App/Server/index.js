import dotenv from 'dotenv'
dotenv.config();
import paymentInformation from "./paymentInformation.js";
import address from "./address.js";
import customer from "./customer.js";
import diningPlace from "./diningPlace.js";
import reservation from './reservation.js';
import app from "./app.js";

customer(app);
diningPlace(app);
address(app);
paymentInformation(app);
reservation(app);

app.listen(3001, () => {
	console.log("running on port 3001");
});


