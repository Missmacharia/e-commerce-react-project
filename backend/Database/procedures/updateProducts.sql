create procedure updateProducts(@productID varchar(200), @productImage varchar(300),@produtName varchar(50),
@productDescription varchar(300),@price int,@discountRate int)
as
begin
update productsTable set productID=@productID, productImage=@productImage, produtName=@produtName, productDescription=@productDescription,
price=@price, discountRate=@discountRate
end