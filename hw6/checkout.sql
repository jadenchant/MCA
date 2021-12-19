DROP TABLE IF EXISTS book;
DROP TABLE IF EXISTS patron;
DROP TABLE IF EXISTS checkout;

CREATE TABLE book(
  bid character(10),
  category text,
  title text,
  author text,
  primary key(bid)
);
CREATE TABLE patron (
  pid int2,
  name text not null,
  phone char(4),
  unique(name, phone),
  primary key(pid)
);
CREATE TABLE checkout (
  cid character(10) unique,
  bid character(10),
  pid int2,
  constraint fk_book
    foreign key(bid)
      references book(bid)
      on delete set null,
  constraint fk_patron
    foreign key(pid)
      references patron(pid)
      on delete set null
);
INSERT INTO checkout VALUES ('1', 'TAN-MOS', 5);
INSERT INTO checkout VALUES ('2', 'TOL-WP', 4);
INSERT INTO checkout VALUES ('3', 'TAN-SC0', 5);
