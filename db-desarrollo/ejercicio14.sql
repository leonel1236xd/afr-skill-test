-- TODO 1: Crea una tabla "productos" con las columnas:
--   id      → entero, clave primaria, autoincremental
--   nombre  → texto máximo 100 caracteres, no nulo
--   precio  → numérico con 2 decimales, no nulo
--   stock   → entero, valor por defecto 0
/* tu código aquí */
CREATE TABLE productos (
    id serial PRIMARY KEY,
    nombre varchar(100) NOT NULL,
    precio numeric(10, 2) NOT NULL,
    stock int DEFAULT 0
);

-- TODO 2: Inserta estos tres registros:
--   ('Laptop',  999.99, 10)
--   ('Mouse',    25.50, 50)
--   ('Teclado',  45.00, 30)
/* tu código aquí */
insert into productos(nombre, precio, stock) VALUES
('Laptop', 999.99, 10),
('Mouse', 25.50, 50),
('Teclado', 45.00, 30);

-- TODO 3: Consulta nombre, precio y stock de los productos
--   con stock > 20, ordenados por precio ASC
/* tu código aquí */
select nombre, precio, stock
from productos
where stock > 20
order by precio asc;