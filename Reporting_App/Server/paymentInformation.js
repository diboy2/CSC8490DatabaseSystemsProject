import simpleExecute from "./simpleExecute";

export default function(app) {
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
	const vendor =
	const insertCard = `
		Insert into Card_Details (Card_Name,Card_number,Security_code,Exp_Month,Exp_Year,Address_id,Payment_details_id)
		values (:card_name,:card_number,:security_code,:exp_month,exp_year,:address_id,payment_details_id);
	`;
	const insertVendor = `
	Insert into Vendor_Details (VName,VEmail,Payment_Details_id)
		values ( 'Cashapp' , 'jayna@cashapp.com' ,1);
	`
	Insert into Payment_Instrument (PAYMENT_TYPE_ID,PAYMENT_TYPE_NAME) values (0, 'American Express' );
Insert into Payment_Instrument (PAYMENT_TYPE_ID,PAYMENT_TYPE_NAME) values (1, 'Discover' );
Insert into Payment_Instrument (PAYMENT_TYPE_ID,PAYMENT_TYPE_NAME) values (2, 'Visa' );
Insert into Payment_Instrument (PAYMENT_TYPE_ID,PAYMENT_TYPE_NAME) values (3, 'Mastercard' );
Insert into Payment_Instrument (PAYMENT_TYPE_ID,PAYMENT_TYPE_NAME) values (4, 'Paypal' );
Insert into Payment_Instrument (PAYMENT_TYPE_ID,PAYMENT_TYPE_NAME) values (5, 'Venmo' );
Insert into Payment_Instrument (PAYMENT_TYPE_ID,PAYMENT_TYPE_NAME) values (6, 'Cashapp' );
Insert into Payment_Instrument (PAYMENT_TYPE_ID,PAYMENT_TYPE_NAME) values (7, 'Duo' );
	app.post("api/paymentInformation", async (req, res) => {
		const {
			payment_instrument_id,
			payment_details
		} = req.body;
		if(payment_instrument_id < 4) {
			
		}
		switch(payment_instrument) {
			case 'American Express':
			case 'Visa':
			case 'Discover':
			case 'Mastercard':

			default:

		}
	});
}
app.listen(3001, () => {
	console.log("running on port 3001");
});


