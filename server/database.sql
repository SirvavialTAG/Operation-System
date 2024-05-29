CREATE TABLE goods(
    Product_ID SERIAL PRIMARY KEY,
    Product_Name VARCHAR(255),
    Category_Name VARCHAR(255),
    Price FLOAT(53)
);

INSERT INTO goods (Product_Name, Category_Name, Price) VALUES 
('Мужская зимняя куртка Nike','1', 12000.00),
('Молоко, 1л','2', 110.0),
('Парацетамол, 500 мг','3', 30.00);
