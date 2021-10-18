Initial set of Requirements:

# 1) Customer: (PK : Cust_id)

## i) Customer orders food from a menu from a dining place which is in fact a reservation.

## ii) Customer registers his payment instruments to pay for subscription

### Attributes: Address_Id,  Email, Phone, First Name, Middle Name, Last Name, payment details (Foreign key) , CustID, Dorm_ID (FK to Building table) {Nullable}, Room_ID {Nullable}

# 2) Menu (PK: D_Name, Building_Id, Menu_Type ):

## i) Menu has food items

## ii) Menu has breakfast, lunch, dinner and common types

## iii) A dining place has a menu. A dining place may have multiple menus, but a menu is bound to a singular dining place.

### Attributes: D_Name, Building_Id, Menu_Type, Food_id(Foreign key to food entity)

# 3) Dining place (D_Name, Building_ID)

## i) Has a menu. Can have many menus - (1:M) relationship

## ii) A dining place has hours of operation

## iii) Exists in a building

### Attributes: D_Name, Building_ID, Delivery_instr (FK to Delivery Entity)

# 4) Food (PK: Food_ID)

## i) A food can be a part of many menus

## ii) A food is within a menu type

## iii) Food is part of the reservation

## iv) Each food has a price (Complementary food would have a price of 0)

### Attributes: Food_id, Food_Name, Food_Price

# 5) Reservation (PK: Reservation_ID ):

## i) Every reservation has a dining place

## ii) Each reservation needs to have a payment details

## iii) Each reservation requires a customer

## iv) Each reservation needs to have a shopping cart.

## v) Each reservation has a status

## vi) Each reservation has a total amount and surcharges (tax rate, etc)

## vi) Each reservation has delivery details

### Attr: Cust_Id, D_Name, Building_ID, Time&day,  Shopping_C(FK to SC) [NOTE!!!], Dining_ID(FK to Dining place),  Payment_Details_ID(FK to Payment Details), Delivery_id(FK to Delivery detials), Reservation_status, total_amount, net_amount

# 7) Payment instrument (PK: Payment_ID)

### Just a lookup table providing all the payment options

## i) Just contains the name of the payment type

## ii) Contains an id That maps to the payment type

### Attributes: Payment_instr_ID, Payment_type_Name (Venno, Cashapp, Credit cards)

# 8) Payment Details (PK: Cust_ID, Payment_ID)

## i) Contains the customer id and the payment options that the customer has added for 	himself/herself

### Attributes: Customer_ID, payment_details_id



# 9) Building (PK: Building_id)

Just a building name

### Atribute: Building Name, Building_id



# 10) Delivery Details (PK: Delivery_ID)

## i) Table to store dining place and the delivery options that they have

[For now ignoring the fact that a delivery options might also have hours of operations apart from the hours of opeartion of the dining place]

### Attribute: Delivery_id,  Dining_place_id(FK to dining place), Delivery_type

# 11) Address Entity:

### Attributes: PK(Address_ID ,Cust_id,)  Address_Name, Zip Code, State, City, Street Address, Apt/Floor, Address_type

# 12) Order_History:

## i) This table needs to store the order history of customers

### Attributes: Order_id, Reservation_id(FK to reservation entity)

# 13) Hours_of_operation:

## i) Hours of operation for the dining place in general

### Attributes: PK(Dining_Place, Day_of_week), Open Time, Close Time (Military times)

# 14) Nutritional Information:

### Attributes: Vitamins, Calories, Protein, etc.

# 15) Shopping_cart:

## i) Each Shopping Cart needs to have total amount, surcharges.

### Attributes: PK(Cust_id, cart_id) , food, quantity

# 16) Online Vendor Details

### Attributes: Payment_details_id -> FK(Payment_details_id-> payment_details_id), Vendor_name, VEmail (PK), Billing_Address -> FK(Address_id, Cust_id)

# 17) Card Details

### Attributes: Payment_details_id -> FK(Payment_details_id-> payment_details_id), Card_Name, Card_Number, Exp_month, Exp_year, Security_code,  Billing_Address -> FK(Address_id, Cust_id)


Elephant in the room : COUPONS!