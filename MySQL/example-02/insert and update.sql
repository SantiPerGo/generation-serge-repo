/* --------------------------------------------------------------------------------
Insert
-------------------------------------------------------------------------------- */

INSERT INTO customers (firstname, lastname, address, email) VALUES
	( 'Alejandro', 'Lopez', 'Av. México', 'ivan@gamil.com'),
	("Alejandro", "PerGo", "Coyuca Gustavo A. Madero", "assasinsky@hotmail.com"),
	("Alejandra", "GalBe", "Amistad 13", "alejagb@hotmail.com"),
	("Alejandro", "Nolasco", "Av. Central 113", "alekzss@outlook.com" ),
	('Alejandro', 'Gomez', 'Calle independencia', 'alexgc@gamil.com'),
	("Alejandra", "Chaparro", "Toluca", "ale_pato@gmail.com");
    
/* --------------------------------------------------------------------------------
Update, Replace, and Null
-------------------------------------------------------------------------------- */

-- Fix incorrect emails
UPDATE customers
	SET email = REPLACE(email, '@gamil.com', '@gmail.com')
    WHERE email LIKE "%@gamil.com";
    
-- Change Alejandro customers to Alex where email != @gmail.com
UPDATE customers
	SET firstname = "Alex"
	WHERE firstname = "Alejandro" AND NOT email LIKE "%@gmail.com";
    
-- Set category_id null when is between 100 and 200
UPDATE products
	SET category_id = NULL
    WHERE category_id BETWEEN 5 AND 10;
    
-- Change shipping_time to purchase_time + 2 days
-- But only for customers with id 5
UPDATE orders SET delivery_date = DATE_ADD(purchase_date, INTERVAL 2 DAY)
	WHERE customer_id = 5;
    
UPDATE orders SET 
 delivery_date = DATE_ADD(purchase_date, INTERVAL 1 DAY)
 WHERE customer_id = 4;