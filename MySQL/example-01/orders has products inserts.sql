USE ch26_ecommerce;

INSERT INTO orders_has_products
	(orders_order_id, products_product_id, amount) VALUES
	(1, 1, 1), (1, 15, 1), (2, 12, 1), (2, 3, 1), (3, 5, 1),
    (3, 8, 1), (4, 16, 1), (5, 4, 1), (5, 1, 1), (5, 2, 1);