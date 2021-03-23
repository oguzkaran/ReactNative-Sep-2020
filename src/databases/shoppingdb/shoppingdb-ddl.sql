
-- shopping.sqlite
create table customers (
    customer_id integer primary key autoincrement,
    name text null,
    address text not null
);

create table products (
    product_id integer primary key autoincrement,
    name text not null,
    unit_price real not null default(0.0) check(unit_price >= 0.0),
    stock int not null default(0)
);

create table orders (
    order_id integer primary key autoincrement,
    customer_id integer not null,
    product_id integer not null,
    unit_price real not null,
    quantity int,
    foreign key (customer_id) references customers(customer_id) on delete cascade,
    foreign key (product_id) references products(product_id) on delete cascade
);


