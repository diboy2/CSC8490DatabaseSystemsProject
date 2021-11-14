SELECT
c.First_name || ' ' || c.Middle_name || ' ' || c.Last_name as Name,
pi.payment_type_name
FROM Customer c, Payment_details pd, Payment_instrument pi
WHERE c.Customer_id = pd.customer_id
AND pd.payment_type_id = pi.payment_type_id;