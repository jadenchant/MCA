CREATE TABLE patron (
  pid int2 primary key,
  name text not null,
  phone char(4),
  unique(name, phone)
);
INSERT INTO patron VALUES (1, 'Chris', '9162');
INSERT INTO patron VALUES (2, 'Paul', '9044');
INSERT INTO patron VALUES (4, 'Sam', null);
INSERT INTO patron VALUES (5, 'Sue', '9292');