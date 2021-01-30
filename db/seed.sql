USE grocerylist_db;

--Insert into categories:
insert into categories(name, createdAt,updatedAt)
values ("Frutas y Verduras", now() ,now());

insert into categories(name, createdAt,updatedAt)
values ("Electrodomesticos", now() ,now());

insert into categories(name, createdAt,updatedAt)
values ("Hogar", now() ,now());

insert into categories(name, createdAt,updatedAt)
values ("Limpieza", now() ,now());


insert into products(name,category,subcategory,price,brand, createdAt,updatedAt)
values ("Jabon", 10, "Zest", now() ,now());

insert into grocerylists(publicID,createdAt,updatedAt)
values("RSV", now(),now());

insert into grocerylistproducts (quantity, createdAt, updatedAt, GroceryListId, ProductId)
values (2, now(), now(), 2, 1);


select * from grocerylists;
select * from products;