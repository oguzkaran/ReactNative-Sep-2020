insert into customers (name, address)
values
('Oğuz Karan', 'Göktürk'),
('Kaan Aslan', 'Ataşehir'),
('CSD', 'Mecidiyeköy');

insert into products (name, unit_price, stock)
values
('Laptop', 3999.9, 30),
('Mouse', 49.9, 300),
('Keyboard', 199.9, 316);

insert into orders (customer_id, product_id, unit_price, quantity)
values
(2, 2, 50.9, 3),
(1, 2, 49.90, 3),
(2, 1, 3000, 3);

delete from orders where customer_id = 7;

update customers set name=upper(name);
update products set unit_price = unit_price + unit_price * 0.4;


/*
customer_id değeri bilinen bir müşterinin sipariş ettiği ürünler için
ürün ismi, ürün birim fiyatı, müşterinin ürünü aldığı fiyat, kaç tane aldığı
bilgisi ve toplam ne kadar ödediği ve şu anki fiyattan alırsa ne kadar ödeyeceği
bilgilerini veren sorgu cümlesini yazınız
*/

-- inner join ile yapılışı
select p.name, p.unit_price as p_price, o.unit_price as o_price, o.quantity,
       o.quantity * o.unit_price as payment, o.quantity * p.unit_price as now
from orders o inner join products p on o.product_id = p.product_id
where o.customer_id = 1;

-- kartezyen sorgu/self join ile yapılışı
select p.name, p.unit_price as "alış birim fiyatı", o.unit_price, o.quantity,
       o.quantity * o.unit_price, o.quantity * p.unit_price
from orders o, products p
where o.product_id = p.product_id and o.customer_id = 1;


/*
customer_id değeri bilinen bir müşterinin sipariş ettiği ürünler için
ürün ismi, ürün birim fiyatı, müşterinin ürünü aldığı fiyat, kaç tane aldığı
bilgisi ve toplam ne kadar ödediği ve şu anki fiyattan alırsa ne kadar ödeyeceği
bilgilerini veren sorgu cümlesini birim fiyata göre büyükten küçüğe sıralı
olarak getiren sorguyu yazınız
*/

-- inner join ile yapılışı
select p.name, p.unit_price, o.unit_price, o.quantity,
       o.quantity * o.unit_price, o.quantity * p.unit_price
from orders o inner join products p on o.product_id = p.product_id
where o.customer_id = 1 order by o.unit_price;

-- kartezyen sorgu/self join ile yapılışı
select p.name, p.unit_price, o.unit_price, o.quantity,
       o.quantity * o.unit_price, o.quantity * p.unit_price
from orders o, products p
where o.product_id = p.product_id and o.customer_id = 1 order by o.unit_price;

/*
Ürün numarası ve adet bilgisi bilinen sipariş için o siparişi veren müşterinin adı,
sipariş verilen ürün adını, birim fiyatı ve ne kadar ödediği bilgilerini getiren
sorguyu yazınız
*/

-- inner join
select c.name, p.name, o.unit_price, p.unit_price, o.unit_price * o.quantity as total
from
customers c inner join orders o on c.customer_id = o.customer_id
inner join products p on p.product_id = o.product_id
where p.product_id = 2 and o.quantity = 3;

-- self join

select c.name, p.name, o.unit_price, p.unit_price, o.unit_price * o.quantity as total
from customers c, orders o, products p
where
c.customer_id = o.customer_id and o.product_id = p.product_id
and p.product_id = 2 and o.quantity = 3;

-- left join işlemi
select o.quantity, c.name
from
customers c left join orders o on c.customer_id = o.customer_id;


-- Yazılar üzerinde işlem yapan bazı önemli fonksiyonlar
-- || operatörü
select c.name || '-' || p.name as info,
       p.unit_price, o.unit_price, o.quantity,
       o.quantity * o.unit_price, o.quantity * p.unit_price
from
orders o inner join products p on o.product_id = p.product_id
inner join customers c on c.customer_id = o.customer_id order by o.unit_price;

-- substr fonksiyonu
select substr('ankara', 3, 3);

-- rtrim ve trim fonksiyonları
select '[' || rtrim('         ankara          ') || ']', '[' || ltrim('         ankara          ') || ']', '[' || trim('         ankara          ') || ']';


-- length fonksiyonu
select length('ankara');

-- aggregate fonksiyonlar
-- count fonksiyonu
select count(*)
from customers c inner join orders o on c.customer_id = o.customer_id
where c.customer_id = 1;

-- sum fonksiyonu
-- customer id si bilinen bir müşterinin toplam siparişlerine ne kadar odediğini bulan sorgu
select sum(o.quantity * o.unit_price)
from customers c inner join orders o on c.customer_id = o.customer_id
where c.customer_id = 1;

-- sum fonksiyonu
-- customer id si bilinen bir müşterinin toplam siparişleri ürün bazında gruplandığında herbir ürün için toplam ödediği
-- miktarı bulan sorgu
select o.product_id, p.name, sum(o.quantity), sum(o.quantity * o.unit_price)
from
customers inner join orders o on customers.customer_id = o.customer_id
inner join products p on p.product_id = o.product_id
where o.customer_id = 1 group by o.product_id

