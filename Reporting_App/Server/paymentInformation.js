import { simpleExecute, getNextInsertId } from "./dbUtil.js";

export default function(app) {

	// only vendor details for now
	app.post("/api/payment_details", async (req, res) => {
		const insertPaymentDetailsIdQuery = `SELECT max(payment_details_id) FROM payment_details`;
		const {
			customer_id,
			payment_type_id,
			details
		} = req.body;
		const {
			v_name,
			v_email
		} = details;
		const payment_details_id = await getNextInsertId(insertPaymentDetailsIdQuery);
		const payment_details = {
			customer_id,
			payment_type_id,
			payment_details_id
		};

		const detailsStatement = `Insert into
			Payment_Details (Payment_Details_id,Customer_id,Payment_type_id)
			values (:payment_details_id,:customer_id,:payment_type_id)`
		await simpleExecute(detailsStatement, payment_details);
		const vendorDetails = {
			v_name,
			v_email,
			payment_details_id
		};
		const vendorDetailsStatement = `Insert into
			Vendor_Details (VName,VEmail,Payment_Details_id)
			values ( :v_name , :v_email , :payment_details_id)
		`;
		const result = await simpleExecute(vendorDetailsStatement, vendorDetails);
		res.header("Access-Control-Allow-Origin", "*");
		res.send(JSON.stringify(vendorDetails));
	});

	app.get("/api/payment_instrument", async (req, res) => {
		const statement = `SELECT * FROM PAYMENT_INSTRUMENT`;
		const result = await simpleExecute(statement, {}, {resultSet: true});
		while ((row = await result.resultSet.getRow())) {
			console.log("getRow(): row " + i++);
			console.log(row);
		  }
		res.header("Access-Control-Allow-Origin", "*");
		res.send(JSON.stringify(result));
	});
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
