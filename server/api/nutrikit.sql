DROP table if EXISTS category, food_item, food_item_category CASCADE;

CREATE TABLE category(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(30)
);

INSERT INTO category(name)
            VALUES('Proteins');
INSERT INTO category(name)
            VALUES('Fruits');
INSERT INTO category(name)
            VALUES('Vegetables');
INSERT INTO category(name)
            VALUES('Dairy');
INSERT INTO category(name)
            VALUES('Grain');       

CREATE TABLE food_item(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(30),
    calories FLOAT DEFAULT 0,
    total_fat FLOAT DEFAULT 0,
    saturdated_fat FLOAT DEFAULT 0,
    trans_fat FLOAT DEFAULT 0,
    protein FLOAT DEFAULT 0,
    carbohydrate FLOAT DEFAULT 0
);

INSERT INTO food_item(name, calories, total_fat, saturdated_fat, trans_fat, protein, carbohydrate)
            VALUES('steak', 300, 5.73, 2.183, 0.182,29.44,0);
INSERT INTO food_item(name, calories, total_fat, saturdated_fat, trans_fat, protein, carbohydrate)
            VALUES('orange', 300, 1, 1, 0, 0, 5);
INSERT INTO food_item(name, calories, total_fat, saturdated_fat, trans_fat, protein, carbohydrate)
            VALUES('romaine', 30, 1.2, 1.2, 0, 2, 3);
INSERT INTO food_item(name, calories, total_fat, saturdated_fat, trans_fat, protein, carbohydrate)
            VALUES('milk', 300, 12.1, 8.6, 2.5, 7, 13);
INSERT INTO food_item(name, calories, total_fat, saturdated_fat, trans_fat, protein, carbohydrate)
            VALUES('bread', 200, 5, 5, 0, 2, 16);
INSERT INTO food_item(name, calories, total_fat, saturdated_fat, trans_fat, protein, carbohydrate)
            VALUES('bagel', 300, 7.0, 7.0, 0.0, 2.0, 24.0);

CREATE TABLE food_item_category(
    id SERIAL PRIMARY KEY NOT NULL,
    category_id INTEGER NOT NULL REFERENCES category(id),
    food_item_id INTEGER NOT NULL REFERENCES food_item(id)
);

INSERT INTO food_item_category(category_id, food_item_id)
            VALUES(1,1);
INSERT INTO food_item_category(category_id, food_item_id)
            VALUES(2,2);
INSERT INTO food_item_category(category_id, food_item_id)
            VALUES(3,3);
INSERT INTO food_item_category(category_id, food_item_id)
            VALUES(4,4);
INSERT INTO food_item_category(category_id, food_item_id)
            VALUES(5,5);
INSERT INTO food_item_category(category_id, food_item_id)
            VALUES(5,6);