-- create database products
-- go

-- create table productsTable(
-- productID varchar(200),
-- productImage varchar(300),
-- produtName varchar(50),
-- productDescription varchar(300),
-- price int,
-- discountRate int,
-- )

-- select *from productsTable

-- insert into productsTable(productID, productImage, produtName, productDescription, price, discountRate)
-- values('eqdhwu42mDKQMOQ3', 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
-- 'dress', 'made by the house of designers', 500, 20)

-- create procedure getAllProducts
-- as
-- begin 
-- select *from productsTable
-- end

-- create procedure getProduct(@productID varchar(200))
-- as
-- begin
-- select *from productsTable where productID= @productID
-- end

-- create procedure addProduct(@productID varchar(200), @productImage varchar(300),@produtName varchar(50),
-- @productDescription varchar(300),@price int,@discountRate int)
-- as
-- begin
-- insert into productsTable(productID, productImage, produtName, productDescription, price, discountRate)
-- values(@productID, @productImage, @produtName,@productDescription,@price, @discountRate)
-- end

-- create procedure updateProducts(@productID varchar(200), @productImage varchar(300),@produtName varchar(50),
-- @productDescription varchar(300),@price int,@discountRate int)
-- as
-- begin
-- update productsTable set productID=@productID, productImage=@productImage, produtName=@produtName, productDescription=@productDescription,
-- price=@price, discountRate=@discountRate
-- end

-- create procedure deleteProducts(@productID varchar(200))
-- as
-- begin
-- delete from productsTable where productID=@productID
-- end

exec getAllProducts