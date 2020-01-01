
BEGIN;

INSERT INTO user
VALUES
("root", "password", 1),
("test1", "password", 0),
("test2", "password", 0),
("test3", "password", 0)
;

INSERT INTO post(id, title, content, view_count, recommend_count)
VALUES
(1, "오늘의 일기", "ㅎㅎㅎ<br>GG!", 1010,22),
(2, "오늘의 일기2", "ㅋㅋㅋㅋㅋㅋ", 3, 1),
(3, "냠냠 후루룩", "야호야호", 10, 3),
(4, "오늘의 점심", "굿굿", 15, 20)
;

INSERT INTO post(title, content, view_count, recommend_count)
VALUES
("SAMPLE TITLE", "SAMPLE CONTENT", 100, 100),
("SAMPLE TITLE", "SAMPLE CONTENT", 100, 100),
("SAMPLE TITLE", "SAMPLE CONTENT", 100, 100),
("SAMPLE TITLE", "SAMPLE CONTENT", 100, 100),
("SAMPLE TITLE", "SAMPLE CONTENT", 100, 100),
("SAMPLE TITLE", "SAMPLE CONTENT", 100, 100),
("SAMPLE TITLE", "SAMPLE CONTENT", 100, 100),
("SAMPLE TITLE", "SAMPLE CONTENT", 100, 100),
("SAMPLE TITLE", "SAMPLE CONTENT", 100, 100),
("SAMPLE TITLE", "SAMPLE CONTENT", 100, 100),
("SAMPLE TITLE", "SAMPLE CONTENT", 100, 100),
("SAMPLE TITLE", "SAMPLE CONTENT", 100, 100),
("SAMPLE TITLE", "SAMPLE CONTENT", 100, 100),
("SAMPLE TITLE", "SAMPLE CONTENT", 100, 100),
("SAMPLE TITLE", "SAMPLE CONTENT", 100, 100),
("SAMPLE TITLE", "SAMPLE CONTENT", 100, 100),
("SAMPLE TITLE", "SAMPLE CONTENT", 100, 100),
("SAMPLE TITLE", "SAMPLE CONTENT", 100, 100),
("SAMPLE TITLE", "SAMPLE CONTENT", 100, 100),
("SAMPLE TITLE", "SAMPLE CONTENT", 100, 100),
("SAMPLE TITLE", "SAMPLE CONTENT", 100, 100),
("SAMPLE TITLE", "SAMPLE CONTENT", 100, 100),
("SAMPLE TITLE", "SAMPLE CONTENT", 100, 100),
("SAMPLE TITLE", "SAMPLE CONTENT", 100, 100),
("SAMPLE TITLE", "SAMPLE CONTENT", 100, 100)
;


INSERT INTO comment(post_id, user_id, content) 
VALUES
(1, "test1", "정말 멋져요 ><"),
(1, "test1", "헤헤헤ㅔ"),
(1, "test2", "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ"),
(2, "test1", "헤헤헤ㅔ"),
(2, "test2", "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ"),
(2, "test3", "헤헤헤ㅔ"),
(3, "test3", "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ"),
(3, "test3", "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ"),
(4, "test2", "gggg")
;



COMMIT;

