
create table seller1(
	sellerid int primary key identity(101,1),
	sname varchar(20) not null,
	available bit,
	availabledate date,
	saddress varchar(255),
	contact bigint unique not null,
	email varchar(50) not null
);

CREATE PROCEDURE alloperation
	@queryType varchar(255), @name varchar(255)=null, @available varchar(255)=null,
	@availabledate varchar(255)=null, @address varchar(255)=null, @contact bigint=null, @email varchar(255)=null
as
begin
	if (@queryType = 'insert')
		begin
			insert into seller1 values(@name,@available,@availabledate,@address,@contact,@email);
		end
	else if(@queryType = 'update' )
		begin
			update seller1 set saddress=@address where email=@email; 
		end
	else if(@queryType = 'delete')
		begin
			delete from seller1 where email=@email;
		end
	else if(@queryType='select')
		begin
			select * from seller1;
		end
end

exec alloperation @queryType='select';

exec alloperation @queryType='insert' @name='hrishi',@available='1',@availabledate='2022-3-12',@address='vashi',@contact=7895461231,@email='hrishi@gmail.com';

exec alloperation @queryType='delete', @email='hrishi@gmail.com'

exec alloperation @queryType='update', @email='om@gmail.com', @address='cst'

