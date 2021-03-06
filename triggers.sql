CREATE OR REPLACE TRIGGER CALCULATE_SUBTOTAL BEFORE INSERT ON SHOPPING_CART
FOR EACH ROW
DECLARE
    foodPrice FLOAT;
BEGIN
    SELECT FOOD.FOOD_PRICE INTO foodPrice FROM FOOD WHERE :NEW.FOOD_ID = FOOD.FOOD_ID;
    :NEW.SUBTOTAL := :NEW.QUANTITY * foodPrice;
END;
/

CREATE OR REPLACE PROCEDURE CALCULATE_GRAND_TOTAL(
    shoppingCartId IN INTEGER,
    reservationId out RESERVATION.RESERVATION_ID%TYPE)
IS
grandTotal FLOAT;
BEGIN
    SELECT SUM(S.SUBTOTAL) INTO grandTotal FROM SHOPPING_CART S WHERE SHOPPING_CART_ID = shoppingCartId;
    INSERT INTO RESERVATION(NET_AMOUNT, TOTAL_AMOUNT, ORDER_TIME, RESERVATION_STATUS, DELIVERY_ID, PAYMENT_DETAILS_ID, SHOPPING_CART_ID)
    VALUES(grandTotal, grandTotal * 1.06, CURRENT_TIMESTAMP, '''INCOMPLETE''', NULL, NULL, shoppingCartId)
    returning RESERVATION_ID into reservationId;
END;
/

CREATE OR REPLACE TRIGGER archive_order AFTER UPDATE ON RESERVATION
FOR EACH ROW
BEGIN
    IF :NEW.RESERVATION_STATUS = '''COMPLETE''' THEN
      INSERT INTO ORDER_HISTORY(RESERVATION_ID)
      VALUES(:NEW.RESERVATION_ID);
    END IF;
END;
/
