create procedure addProduct(@productID varchar(200), @productImage varchar(300),@produtName varchar(50),
@productDescription varchar(300),@price int,@discountRate int)
as
begin
insert into productsTable(productID, productImage, produtName, productDescription, price, discountRate)
values(@productID, @productImage, @produtName,@productDescription,@price, @discountRate)
end