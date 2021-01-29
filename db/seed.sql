USE grocerylist_db;
insert into products(name,category,subcategory,price,brand, createdAt,updatedAt)
values ("Jabon", "Domestic Products", "Cleaning Products", 10, "Zest", now() ,now());

insert into grocerylists(publicID,createdAt,updatedAt)
values("RSV", now(),now());

insert into grocerylists(publicID,createdAt,updatedAt)
values("DDT", now(),now());

insert into grocerylistproducts (quantity, createdAt, updatedAt, GroceryListId, ProductId)
values (2, now(), now(), 2, 1);


select * from grocerylists;
select * from products;