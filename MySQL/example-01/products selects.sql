USE ch26_ecommerce;
    
SELECT * FROM products;
SELECT * FROM products WHERE category_id = 1;
SELECT * FROM products WHERE category_id is null;
SELECT * FROM products WHERE `name` LIKE "%viaje%";