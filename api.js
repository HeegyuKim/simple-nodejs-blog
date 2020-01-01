
exports.user = {
    create: function(db, body, next) {
        var query = "INSERT INTO user(id, password) VALUES(?, ?);"
        var stmt = db.prepare(query);
        stmt.run(body.id, body.password, function(err) {
            if(err) {
                next(false);
            }
            else {
                next(true);
            }
        });
        stmt.finalize();
    },

    login: function(db, id, password, next) {
        var query = "SELECT id FROM user WHERE id=? AND password=? " +
                    " AND is_admin = 0;"
        var stmt = db.prepare(query);
        stmt.all(id, password, function(err, rows) {
            next(err, rows)
        });
        stmt.finalize();
    },

    delete: function(db, id, next) {
        var query = "DELETE FROM user WHERE id=?;"
        var stmt = db.prepare(query);
        stmt.run(id, function(err) {
            next(err)
        });
        stmt.finalize();
    }
}

exports.post = {

    get_list: function(db, query, next) {
        var posts = null;
        var page = parseInt(query.page || "1") - 1;
        var count_per_page = 5;
        
        // 게시물 목록을 가져옴.
        var query = "SELECT * FROM post " +
                "ORDER BY created_at DESC " + 
                "LIMIT ?, ?";
        var stmt = db.prepare(query);
        stmt.all(page * count_per_page, count_per_page, function(err, rows) {
            posts = rows;
        });
        stmt.finalize();

        // 최대 페이지 개수를 가져옴.
        var query = "SELECT COUNT(*) / ? + 1 AS max_page FROM post";
        stmt = db.prepare(query);
        stmt.all(count_per_page, function(err, rows){

            if(err) {
                next(err, null);
            }
            else {
                var result = {
                    page: page + 1,
                    max_page: rows[0].max_page,
                    posts: posts
                };
    
                next(null, result);
            }
        })
        stmt.finalize();
    },

    // id를 가진 게시물을 DB에서 가져와서 next()로 전달.
    // 댓글도 함께 가져옴.
    get: function(db, id, next) {
        db.serialize(function(){
            var result = {}
            // 게시물 가져오기
            var query = "SELECT * FROM post WHERE id=? AND is_deleted=0;"
            var stmt = db.prepare(query);
            stmt.all(id, function(err, rows) {
                if(rows && rows.length > 0) {
                    result.post = rows[0];
                }
            });
            stmt.finalize();
            
            // 댓글들 가져오기
            var query = "SELECT * FROM comment WHERE post_id=? ORDER BY created_at;"
            var stmt = db.prepare(query);
            stmt.all(id, function(err, rows) {
                result.comments = rows;
                next(err, result);
            });
            stmt.finalize();
        }); 
    },

    // 게시물의 조회수를 증가시킴
    increase_view_count: function(db, id, next) {
        var query = "UPDATE post SET view_count = view_count + 1 WHERE " + 
                    "id = ?"
        var stmt = db.prepare(query);
        stmt.run(id, function(err) {
            next(err);
        });
        stmt.finalize();
    },

    // 게시물의 추천수를 증가시킴.
    increase_recommend_count: function(db, id, next) {
        var query = "UPDATE post SET recommend_count = recommend_count + 1 WHERE " + 
                "id = ?"
        var stmt = db.prepare(query);
        stmt.run(id, function(err) {
            next(err);
        });
        stmt.finalize();
    },


    // body에 있는 내용으로 새로운 게시물 작성
    create: function(db, title, content, next) {
        var query = "INSERT INTO post(title, content) VALUES (?, ?);";
        var stmt = db.prepare(query);
        stmt.run(title, content, function(err) {
            next(err, this.lastID);
        });
        stmt.finalize();
    },

    // body에 있는 내용으로 id 게시물 변경
    modify: function(db, id, title, content, next) {
        var query = "UPDATE post SET title=?, content=? WHERE id=?;";
        var stmt = db.prepare(query);
        stmt.run(title, content, id, function(err) {
            next(err);
        });
        stmt.finalize();
    },

    // id 게시물 삭제
    delete: function(db, id, next) {
        var query = "DELETE FROM post WHERE id=?;";
        var stmt = db.prepare(query);
        stmt.run(id, function(err) {
            next(err);
        });
        stmt.finalize();
    }
};

exports.comment = {

    create: function(db, uid, post_id, content, next) {
        var query = "INSERT INTO comment(post_id, user_id, content) VALUES (?, ?, ?);";
        var stmt = db.prepare(query);
        stmt.run(post_id, uid, content, function(err) {
            next(err);
        });
        stmt.finalize();
    },

    delete: function(db, user_id, comment_id, next) {
        var query = "DELETE FROM comment WHERE id=? AND user_id=?";
        var stmt = db.prepare(query);
        stmt.all(comment_id, user_id, function(err, result) {
            console.log(err, result);
            next(err, result);
        });
        stmt.finalize();
    },

    get_list: function(db, query, next) {
        var posts = null;
        var page = parseInt(query.page || "1") - 1;
        var count_per_page = 5;
        
        // 게시물 목록을 가져옴.
        var query = "SELECT * FROM comment " +
                "ORDER BY created_at DESC " + 
                "LIMIT ?, ?";
        var stmt = db.prepare(query);
        stmt.all(page * count_per_page, count_per_page, function(err, rows) {
            console.log(err, rows);
            posts = rows;
        });
        stmt.finalize();

        // 최대 페이지 개수를 가져옴.
        var query = "SELECT COUNT(*) / ? + 1 AS max_page FROM comment";
        stmt = db.prepare(query);
        stmt.all(count_per_page, function(err, rows){

            if(err) {
                next(err, null);
            }
            else {
                var result = {
                    page: page + 1,
                    max_page: rows[0].max_page,
                    posts: posts
                };
    
                next(null, result);
            }
        })
        stmt.finalize();
    },
};

exports.admin = {

    login: function(db, id, password, next) {
        var query = "SELECT id FROM user WHERE id=? AND password=? " +
                    " AND is_admin = 1;"
        var stmt = db.prepare(query);
        stmt.all(id, password, function(err, rows) {
            next(err, rows && rows.length > 0);
        });
        stmt.finalize();
    }
}