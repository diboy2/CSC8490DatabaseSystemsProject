import customer from "./customer";
import app from "./app";

customer(app);


//Insert into Shopping_cart (Shopping_cart_id,Quantity,Food_id) values (1,3,739);
app.listen(3001, () => {
	console.log("running on port 3001");
});


