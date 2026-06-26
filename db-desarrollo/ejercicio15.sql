-- Tabla existente:
-- empleados(id, nombre, departamento, salario)

-- Datos de ejemplo:
-- ('Laura',  'TI',      3000)
-- ('Pedro',  'TI',      5000)
-- ('María',  'Ventas',  2000)
-- ('Carlos', 'Ventas',  2500)
-- ('Ana',    'TI',      4000)

-- TODO: Escribe una consulta que retorne nombre y salario
-- de empleados que ganan MÁS que el promedio salarial
-- de su propio departamento.
-- Ordena por salario de forma descendente.
SELECT nombre, salario
FROM empleados e1
WHERE salario > (
    SELECT AVG(salario)
    FROM empleados e2
    WHERE e1.departamento = e2.departamento
)
ORDER BY salario DESC;