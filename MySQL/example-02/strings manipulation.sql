/* ----------------------------------------------------
String operations
---------------------------------------------------- */

-- Concatenate
SELECT customer_id AS id, 
	concat(firstname, " ", lastname) AS name,
    email FROM customers;

-- Replace
SELECT customer_id, firstname, lastname,
	REPLACE(address, "Av.", "Avenida") AS address
	FROM customers; 
    
-- Invert a word
SELECT customer_id, firstname,
	REVERSE(firstname) AS reversed_name
	FROM customers; 
    
-- Convert to lowercase and uppercase
SELECT lower(firstname) as firstname,
		upper(lastname) as lastname
        FROM customers;
        
-- Show the complete name in uppercase
SELECT upper(concat(firstname, " ", lastname))
	AS name FROM customers;
    