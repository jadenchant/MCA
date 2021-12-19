CREATE TABLE book(
  callno character(10) primary key,
  category text,
  title text,
  author text
);
INSERT INTO book (callno, category, title, author) VALUES ('TOL-WP', 'novel', 'War and Peace', 'Tolstoy');
INSERT INTO book (callno, category, title, author) VALUES ('KEN-PT1', 'biography', 'PT 109', 'Kennedy');
INSERT INTO book (callno, category, title, author) VALUES ('TAN-MOS', 'textbook', 'Modern Operating Systems', 'Tanenbaum');
INSERT INTO book (callno, category, title, author) VALUES ('TAN-SC0', 'textbook', 'Structured Computer Organization', 'Tanenbaum');
INSERT INTO book (callno, category, title, author) VALUES ('HEL-C22', 'nobel', 'Catch-22', 'Heller');
