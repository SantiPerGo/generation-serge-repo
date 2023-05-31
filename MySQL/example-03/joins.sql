/* ------------------------------------------------------------
Inner, left , right and full outer join
------------------------------------------------------------ */

-- Get rows that matches in both tables
-- With price > 100 and ordered by price descendant
SELECT * FROM products FULL JOIN categories;
SELECT products.name AS product_name,
	products.description AS product_description,
	price,
	categories.name AS category_name,
    categories.description AS category_description
	FROM products INNER JOIN categories
	ON products.category_id = categories.category_id
    WHERE price > 100 ORDER BY price DESC;

-- Get the left table with data that matches one
-- of the right table, if not found it is null
SELECT * FROM products LEFT JOIN categories
	ON products.category_id = categories.category_id;
    
-- Get the right table with data that matches one
-- of the left table, if not found it is null
SELECT * FROM products RIGHT JOIN categories
	ON products.category_id = categories.category_id;
        
-- Combining all the tables
SELECT concat(firstname, " ", lastname) AS name,
	address, email, purchase_date, delivery_date,
    amount, products.name AS product_name,
    products.description AS product_description, price
	FROM customers INNER JOIN orders
    ON customers.customer_id = orders.customer_id
    INNER JOIN orders_has_products
    ON orders.order_id = orders_has_products.order_id
    INNER JOIN products
    ON orders_has_products.product_id = products.product_id;
