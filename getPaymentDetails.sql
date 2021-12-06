SELECT
    c.first_name || ' ' || c.middle_name || ' '  || c.last_name AS customer_name,
    cd.card_name,
    cd.card_number,
    pi.payment_type_name
FROM customer c, payment_details pd, card_details cd, payment_instrument pi
WHERE c.customer_id = pd.customer_id
AND pd.payment_details_id = cd.payment_details_id
AND pi.payment_type_id = pd.payment_type_id;