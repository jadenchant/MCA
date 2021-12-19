-- 1
SELECT s.sname FROM sailors s, reserves r WHERE s.sid = r.sid AND r.bid = 103;
-- 2
SELECT s.sname FROM sailors s, reserves r, boats b WHERE s.sid = r.sid AND b.bid = r.bid AND b.color = 'red';
-- 3
SELECT DISTINCT b.color FROM sailors s, reserves r, boats b WHERE s.sid = r.sid AND b.bid = r.bid AND s.sname = 'Lubber';
-- 5
SELECT DISTINCT s.sname FROM sailors s, reserves r, boats b WHERE s.sid = r.sid AND b.bid = r.bid AND (b.color = 'red' OR b.color = 'green');
-- 6
SELECT DISTINCT s.sname FROM sailors s, reserves r1, boats b1, reserves r2, boats b2 WHERE s.sid = r1.sid AND b1.bid = r1.bid AND s.sid = r2.sid AND b2.bid = r2.bid AND b1.color = 'red' AND b2.color = 'green';
-- 22
SELECT sid sname FROM sailors WHERE rating > 7;
-- 25
SELECT AVG(age) FROM sailors;
-- 26
SELECT AVG(age) FROM sailors WHERE rating = 10;
-- 27
SELECT sname, age FROM sailors WHERE age = (SELECT MAX(age) FROM sailors);
-- 30
SELECT sname FROM sailors WHERE age > (SELECT MAX(age) FROM sailors WHERE rating = 10);