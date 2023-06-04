USE ch26_ecommerce;

INSERT INTO categories (name, description) VALUES ('Tecnología', 'Productos y avances tecnológicos');
INSERT INTO categories (name, description) VALUES ('Deportes', 'Actividades deportivas y competiciones');
INSERT INTO categories (name, description) VALUES ('Moda', 'Ropa, accesorios y tendencias de moda');
INSERT INTO categories (name, description) VALUES ('Alimentación', 'Productos alimenticios y recetas');
INSERT INTO categories (name, description) VALUES ('Viajes', 'Destinos turísticos y experiencias de viaje');
INSERT INTO categories (name, description) VALUES ('Educación', 'Formación académica y oportunidades educativas');
INSERT INTO categories (name, description) VALUES ('Arte y Cultura', 'Manifestaciones artísticas y expresiones culturales');
INSERT INTO categories (name, description) VALUES ('Salud y Bienestar', 'Consejos de salud y bienestar personal');
INSERT INTO categories (name, description) VALUES ('Negocios y Finanzas', 'Emprendimiento y consejos financieros');
INSERT INTO categories (name, description) VALUES ('Entretenimiento', 'Eventos y opciones de entretenimiento');

INSERT INTO categories (name, description) VALUES ('Videojuegos', 'Videojuegos para Xbox');
INSERT INTO categories (name, description) VALUES ('Hogar', 'Hogar y decoración');
INSERT INTO categories (name, description) VALUES ('Mascotas', 'Todo para su mascota');

DELETE FROM categories WHERE category_id = 11;

UPDATE categories SET category_id =12 WHERE category_id = 1;
DELETE FROM categories WHERE category_id = 12;

UPDATE categories SET category_id = 14 WHERE category_id = 2;

DELETE FROM categories WHERE category_id = 3;
DELETE FROM categories WHERE category_id = 5;