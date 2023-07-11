##  Create this table into  your database before running application

create table slots(
id INT auto_increment primary key,
date date NOT NULL,
startSlot TIME NOT NULL,
endSlot TIME NOT NULL);