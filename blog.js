var express = require("express");
var bodyParser = require("body-parser");
var api = require("./api.js");
var db = require("sqlite3").verbose().Database("./blog.db");

var app = express();

// 뷰 등록 + 템플릿 엔진 등록
app.set('views', __dirname + '/views'); // 템플릿이 있는 디렉토리
app.set('view engine', 'ejs'); // 템플릿 엔진
app.engine('html', require('ejs').renderFile);

// 정적 파일 디렉터리 등록
app.use('/public', express.static(__dirname + '/public'));

// POST 요청 처리를 위한 body-parser
app.use(bodyParser.urlencoded({ extended: true }));


//////// URL Routing ////////////
app.get("/", function(req, res) {
    res.render("index.ejs");
});

// 게시물 목록 가져오기
// query 값 목록
// * sort
// - view_count: 조회수 정렬
// - recommend: 추천수 정렬
// * page
// 페이지 인덱스(1부터 시작)
app.get("/posts", function(req, res) {

});

// id 게시물 가져오기
app.get("/post/:id", function(req, res) {

});

// id 게시물에 댓글 추가
// Body 값
// - content: 댓글 내용
app.post("/post/:id/comments", function(req, res) {

})

// 로그인 페이지 가져오기
app.get("/login", function(req, res) {

});

// 회원가입 페이지 가져오기
app.get("/sign_up", function(req, res) {

});

// 회원가입 요청
app.post("/users", function(req, res) {

});

// 로그인 요청
app.post("/login", function(req, res) {

});

// 로그아웃 요청
app.post("/logout", function(req, res) {

});

// 회원탈퇴 요청
app.post("/user/:id/delete", function(req, res) {

});



//
//
//
//////// Admin /////////
app.get("/admin", function(req, res) {

});


// 관리자 로그인 페이지를 가져옵니다.
app.get("/admin/login", function(req, res) {

});

// 관리자 로그인 페이지에서 로그인 시도를 할 경우.
app.post("/admin/login", function(req, res) {
    var id = req.body.id;
    var pw = req.body.password;
});

// 게시물 목록 보기
app.get("/admin/posts", function(req, res) {

});

// 관리자가 {id}를 가진 게시물 삭제
app.post("/admin/post/:id/delete", function(req, res) {

})

// 댓글목록 보기
app.get("/admin/comments", function(req, res) {

});

// 관리자가 특정 댓글 삭제
app.post("admin/comment/:id/delete", function(req, res) {

});


app.listen(3000, function() {
    console.log("서버를 시작합니다.")
});
