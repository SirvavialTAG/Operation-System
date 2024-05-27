CREATE TABLE goods(
    Product_ID SERIAL PRIMARY KEY,
    Product_Name VARCHAR(255),
    Category_Name VARCHAR(255),
    Price FLOAT(53)
);

INSERT INTO goods (Product_Name, Category_Name, Price) VALUES 
('product1','category1', 155),
('product2','category1', 222),
('prosuct3','category2', 34);



