import { simpleExecute, getNextInsertId } from "./dbUtil.js";

const insertCardDetails = async (cardDetails) => {
	const {
		payment_details_id,
		address_id,
		card_name,
		card_number,
		security_code,
		exp_month,
		exp_year
	} = cardDetails;
	const bindings = {
		payment_details_id,
		address_id,
		card_name,
		card_number,
		security_code,
		exp_month,
		exp_year
	};
	const cardDetailsStatement = `Insert into
		Card_Details (Card_Name,Card_number,Security_code,Exp_Month,Exp_Year,Address_id,Payment_details_id)
		values (:card_name, :card_number, :security_code, :exp_month, :exp_year, :address_id, :payment_details_id)
	`;
	return await simpleExecute(cardDetailsStatement, bindings);
};

const insertVendorDetails = async (vendorDetails) => {
	const {
		v_name,
		v_email,
		payment_details_id
	} = vendorDetails;
	const bindings = {
		v_name,
		v_email,
		payment_details_id
	};
	const vendorDetailsStatement = `Insert into
		Vendor_Details (VName,VEmail,Payment_Details_id)
		values (:v_name, :v_email, :payment_details_id)
	`;
	return await simpleExecute(vendorDetailsStatement, bindings);
};


export default function(app) {
	app.post("/api/payment_details", async (req, res) => {
		const insertPaymentDetailsIdQuery = `SELECT max(payment_details_id) FROM payment_details`;
		const {
			customer_id,
			payment_type_id,
			details
		} = req.body;
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
		if(payment_type_id > 3 ) {
			const {
				v_name,
				v_email
			} = details;
			const vendorResults = await insertVendorDetails({
				payment_details_id,
				v_name,
				v_email
			});
			res.header("Access-Control-Allow-Origin", "*");
			res.send(JSON.stringify(vendorResults));
		} else {
			const {
				address_id,
				card_name,
				card_number,
				security_code,
				exp_month,
				exp_year
			} = details;
			const cardResults = await insertCardDetails({
				payment_details_id,
				address_id,
				card_name,
				card_number,
				security_code,
				exp_month,
				exp_year
			});
			res.header("Access-Control-Allow-Origin", "*");
			res.send(JSON.stringify(cardResults));
		}
	});

	app.get("/api/payment_instruments", async (req, res) => {
		const statement = `SELECT
			pi.payment_type_id "payment_type_id",
			pi.payment_type_name "payment_type_name"
			FROM payment_instrument pi `;
		const result = await simpleExecute(statement, {}, {
			outFormat: oracledb.OUT_FORMAT_OBJECT
		  });
		res.header("Access-Control-Allow-Origin", "*");
		res.send(JSON.stringify(result.rows));
	});
}
