import { simpleExecute, getNextInsertId } from "./dbUtil.js";

export default function(app) {
	const insertIdQuery = `SELECT max(customer_id) FROM customer`;
	app.get("/api/payment_instrument", async (req, res) => {
		const statement = `SELECT PAYMENT_TYPE_ID "payment_id", PAYMENT_TYPE_NAME "payment_type_name" FROM PAYMENT_INSTRUMENT WHERE payment_type_id = 2`;
		const result = await simpleExecute(statement);
		res.header("Access-Control-Allow-Origin", "*");
		res.send(JSON.stringify(result.rows));
	})
	// const card = {
	// 	card_name,
	// 	card_number,
	// 	security_code,
	// 	exp_month,
	// 	exp_year,
	// 	address: {
	// 		address_name,
	// 		address2,
	// 		city,
	// 		state,
	// 		street,
	// 		zip_code,
	// 		address_type,
	// 		customer_id
	// 	}
	// };
	// const vendor =
	// const insertCard = `
	// 	Insert into Card_Details (Card_Name,Card_number,Security_code,Exp_Month,Exp_Year,Address_id,Payment_details_id)
	// 	values (:card_name,:card_number,:security_code,:exp_month,exp_year,:address_id,payment_details_id);
	// `;
	// const insertVendor = `
	// Insert into Vendor_Details (VName,VEmail,Payment_Details_id)
	// 	values ( 'Cashapp' , 'jayna@cashapp.com' ,1);
	// `
	// app.post("api/paymentInformation", async (req, res) => {
	// 	const {
	// 		payment_instrument_id,
	// 		payment_details
	// 	} = req.body;
	// 	if(payment_instrument_id < 4) {

	// 	}
	// 	switch(payment_instrument) {
	// 		case 'American Express':
	// 		case 'Visa':
	// 		case 'Discover':
	// 		case 'Mastercard':

	// 		default:

	// 	}
	// });
}
