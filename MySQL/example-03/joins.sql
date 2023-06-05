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
    
-- Combines both tables even with null foreing keys
SELECT * FROM products CROSS JOIN categories;

-- Natural = Inner, but we don't have to specify
-- The columns with the same name in both tables
SELECT * FROM products NATURAL JOIN categories;
        
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

-- USING with same foreign key name
SELECT products.*, categories.*
	FROM products INNER JOIN categories
    -- ON customers.customer_id = orders.customer_id
    USING (category_id)
    -- GROUP BY categories.category_id
    ORDER BY categories.category_id ASC;
    
-- Elements of products that aren't in the join  
SELECT * FROM products WHERE product_id NOT IN (1,2,3,4,6,7,8,9,10,12,14,15,16,17);  
SELECT *
	FROM products 
	WHERE product_id
	NOT IN (
		SELECT product_id
		FROM products 
		INNER JOIN categories
		USING (category_id)
		ORDER BY product_id ASC
	);
        
-- Getting customers with orders and products
-- Even if the products has null value in the categories
SELECT 
		firstname, lastname,
		purchase_date, delivery_date,
        amount,
        products.name AS product_name,
        categories.name AS category,
		price       
	FROM customers
    INNER JOIN orders
    ON customers.customer_id = orders.customer_id
    INNER JOIN orders_has_products
    ON orders.order_id = orders_has_products.order_id
    INNER JOIN products
    ON orders_has_products.product_id = products.product_id
    LEFT JOIN categories
    USING (category_id);