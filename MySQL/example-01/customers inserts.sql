USE ch26_ecommerce;

-- Alternatives `ch26_ecommerce`.customers, customers(`customer_id`)
INSERT INTO customers(customer_id, firstname, lastname, address, email) VALUES
	(1, "Sergio", "Torres", "Av. Siempre viva", "sergio@gmail.com"),
	(50, "Alexis", "MT", "Av. Benito Juárez", "alexis@gmail.com"),
	(3, "Sergio", "Torres", "Calle Palmas n.2", "torres@gmail.com"),
	(4, "Ixchel", "N", "Av. Pencil n.56", "ixchel@gmail.com");
    
-- Inserting registers with auto increment
INSERT INTO customers(firstname, lastname, address, email) VALUES
	("Berenice", "Gudiño", "Calle Las Palmas n.45", "berenice@gmail.com"),
    ("Abraham", "Castillo", "Calle Hidalgo n.89", "abraham@gmail.com");
    
-- Updating incorrect id's
UPDATE customers
SET customer_id = CASE
    WHEN customer_id = 3 THEN 2
    WHEN customer_id = 4 THEN 3
    WHEN customer_id = 50 THEN 4
    WHEN customer_id = 51 THEN 5
    ELSE customer_id
    END;
    
-- Restarting auto increment initial value
ALTER TABLE customers AUTO_INCREMENT = 1;

INSERT INTO customers(firstname, lastname, address, email) VALUES
	("Nicolas", "Walser", "4 Priver Drive", "nicolas@gmail.com"),
    ("Jessica", "Sánchez", "Av. Las Águilas n.90", "jessica@gmail.com");