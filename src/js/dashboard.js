import DashBoard from "./controllers/dashboard.controller.js";

const idPost = localStorage.getItem("@kenzie-blog:postId");
DashBoard.headerInfoUser()
DashBoard.criarNovoPost()
DashBoard.escutadorNovoPost()
DashBoard.listarPostsRecentes()
DashBoard.userPostRecent(idPost)
// DashBoard.escutadorEdicaoPost()
