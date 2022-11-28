create procedure getProduct(@productID varchar(200))
as
begin
select *from productsTable where productID= @productID
end