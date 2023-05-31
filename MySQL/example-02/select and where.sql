/* ----------------------------------------------------
Select, As, Count, Distinct, Limit
---------------------------------------------------- */

-- Consult products table
SELECT `name`, price FROM products;

-- Consult and rename result
SELECT name AS nombre,
	description AS "Descripcion del Producto"
    FROM products;
    
-- Select only not repeated data
SELECT DISTINCT category_id FROM products;
SELECT DISTINCT product_id FROM orders_has_products;

-- Count products sold out of the 17 available
SELECT COUNT(DISTINCT product_id)
	AS "No. de Productos Vendidos"
    FROM orders_has_products;
    
-- Count not repeated names
SELECT COUNT(DISTINCT firstname)
	AS Nombres_Distintos FROM customers;

-- Limit number of rows in the result
SELECT * FROM customers LIMIT 5;

/* ----------------------------------------------------
Where, Operators, In, Like, Between, Null
---------------------------------------------------- */

-- Filter customers named "Alejandro"
SELECT * FROM customers
	WHERE firstname = "Alejandro";
    
SELECT COUNT(firstname) FROM customers
	WHERE firstname = "Alejandro";
    
-- Filter customers named "Alejandro" or "Alejandra"
SELECT * FROM customers
	WHERE firstname = "Alejandro"
    OR firstname = "Alejandra";

SELECT * FROM customers
	WHERE firstname IN ("Alejandro", "Alejandra");
    
-- _ = 1 character, % = multiple characters
SELECT * FROM customers
	WHERE firstname LIKE "Alejandr_";

-- Count customers with the email @gmail.com 
SELECT COUNT(email) FROM customers
	WHERE email LIKE "%@gmail.com";
    
-- Get customers not named "Alejandro"
SELECT * FROM customers
	WHERE firstname != "Alejandro";
    
SELECT * FROM customers
	WHERE NOT firstname = "Alejandro";
    
-- Get customers not named "Alejandro" or "Alejandra"
SELECT * FROM customers
	WHERE NOT firstname LIKE "Alejandr_";
    
-- Count products with price >= 100 and <= 500
SELECT * FROM products
	WHERE price >= 100 AND price <= 500;
    
SELECT * FROM products
	WHERE price BETWEEN 100 AND 500;
    
-- Count products with price < 100 and > 500
SELECT * FROM products
	WHERE price NOT BETWEEN 100 AND 500;
    
-- Get products with price != 99.99
SELECT * FROM products
	WHERE price <> 99.99;
    
-- Get products with price not 49.99, 99.99 or 149.99
SELECT * FROM products
	WHERE price NOT IN (49.99, 99.99, 149.99);
    
-- Getting null values
SELECT * FROM products WHERE category_id IS NULL;
SELECT * FROM products WHERE ISNULL(category_id);

/* ----------------------------------------------------
Math operations
---------------------------------------------------- */

SELECT 5 * 2;

-- Apply 10% discount to products
SELECT name, price+100, price*.9
	AS price_with_discount FROM products;
    
-- Get monthly payment of product
SELECT name, price, TRUNCATE(price/12, 2)
	AS monthly_payment FROM products;
    
-- ABS() absolute value
-- ROUND() round up if >= 0.5, else round down
-- CEIL() round to up
-- FLOOR() round to down
-- MOD() module or remain of division
-- PI() pi value
-- POWER(a, b) a^b
-- RAND() random number from 0 to 1
SELECT ROUND(12.4) AS round;

-- Sum values of multiple rows where id is 2
SELECT SUM(price) AS total_category_2
	FROM products WHERE category_id = 2;
    
-- Products average where id is 2
SELECT AVG(price) as price_avg FROM products
	WHERE category_id = 2;
    
-- Get the cheapest and most expensive product
SELECT MIN(price) AS lowest_price,
	MAX(price) AS highest_price
	FROM products;
    
/* ----------------------------------------------------
Anidated queries, group by and having
---------------------------------------------------- */
    
-- Get cheapest and most expensive product with name
SELECT name, price FROM products
	WHERE price = (SELECT MIN(price) FROM products)
    OR price = (SELECT MAX(price) FROM products);
    
-- Get the 5 cheapest products
SELECT name, price FROM products
	ORDER BY price ASC LIMIT 5;
    
-- Get price average greater than 90 by category
SELECT category_id, AVG(price) AS avg_price
	FROM products
	WHERE category_id IS NOT NULL
	GROUP BY category_id
    HAVING avg_price > 90;
    
-- Get products amount by order
SELECT order_id, SUM(amount) AS amount
	FROM orders_has_products
	GROUP BY order_id;
    