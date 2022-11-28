create procedure deleteProducts(@productID varchar(200))
as
begin
delete from productsTable where productID=@productID
end