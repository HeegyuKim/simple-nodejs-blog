
exports.user = {
    create: function(db, body, next) {
        
    },


    get_list: function(db, query, next) {
        
    },

    login: function(db, id, password, next) {
        
    },

    delete: function(db, id, next) {
        
    }
}

exports.post = {

    get_list: function(db, query, next) {

    },

    // id를 가진 게시물을 DB에서 가져와서 next()로 전달.
    // 댓글도 함께 가져옴.
    get: function(db, id, next) {
        
    },

    // 게시물의 조회수를 증가시킴
    increase_view_count: function(db, id, next) {
        
    },

    // 게시물의 추천수를 증가시킴.
    increase_recommend_count: function(db, id, next) {
        
    },


    // body에 있는 내용으로 새로운 게시물 작성
    create: function(db, title, content, next) {
        
    },

    // body에 있는 내용으로 id 게시물 변경
    modify: function(db, id, title, content, next) {
        
    },

    // id 게시물 삭제
    delete: function(db, id, next) {
        
    }
};

exports.comment = {

    create: function(db, uid, post_id, content, next) {
        
    },

    delete: function(db, user_id, comment_id, next) {
        
    },

    delete_by_admin: function(db, comment_id, next) {
        
    },

    get_list: function(db, query, next) {
        
    },
};

exports.admin = {

    login: function(db, id, password, next) {
        
    }
}