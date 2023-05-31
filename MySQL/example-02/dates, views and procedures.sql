/* --------------------------------------------------------
Dates, order by
-------------------------------------------------------- */

-- Date and hour
SELECT now();
SELECT localtimestamp();

-- Date
SELECT curdate();
SELECT DATE(now());

-- String to date with format YY-MM-DD
SELECT str_to_date("31 May, 2023", "%d %M, %Y");
SELECT str_to_date("05/31/2023", "%m/%d/%Y");

-- Difference between two dates
-- Order by ASC or DESC
SELECT *, datediff(delivery_date, purchase_date)
	AS "shipping_time" FROM orders
    ORDER BY shipping_time ASC;
    
-- Get orders with shipping time >= 5 days
-- Sort descending by shipping and delivery
SELECT *, datediff(delivery_date, purchase_date)
	AS shipping_time FROM orders
    -- WHERE datediff(delivery_date, purchase_date) >= 5
    ORDER BY shipping_time DESC, delivery_date DESC;

WITH DATA AS (
	SELECT *, datediff(delivery_date, purchase_date)
		AS shipping_time FROM orders
		ORDER BY shipping_time DESC)
	SELECT * FROM DATA
	WHERE shipping_time >= 5;
    
SELECT * FROM (
	SELECT *, datediff(delivery_date, purchase_date)
		AS shipping_time FROM orders
		ORDER BY shipping_time DESC) AS DATA
	WHERE shipping_time >= 5;
    
/* --------------------------------------------------------
Views and procedures
-------------------------------------------------------- */

-- Views is only for SELECT
CREATE VIEW orders_delivery AS
	SELECT *, datediff(delivery_date, purchase_date)
	AS shipping_time FROM orders
    -- WHERE datediff(delivery_date, purchase_date) >= 5
    ORDER BY shipping_time DESC, delivery_date DESC;
    
SELECT * FROM orders_delivery;

-- Using procedure created outside of this script
-- Procedure use variable arguments
CALL show_shipping_time(1);

-- Creating procedure inside SQL script
DELIMITER $$
CREATE PROCEDURE show_shipping_time_manual (IN days INT)
BEGIN 
SELECT *, datediff(delivery_date, purchase_date)
	AS shipping_time FROM orders
	WHERE datediff(delivery_date, purchase_date) >= days
	ORDER BY shipping_time DESC, delivery_date DESC;
END $$
DELIMITER ;

CALL show_shipping_time_manual(1);