-- Up
create table Emails (
    id integer primary key autoincerment,
    email text,
);

insert into Emails (email) values ('hello');

-- Down

drop table Emails; 
