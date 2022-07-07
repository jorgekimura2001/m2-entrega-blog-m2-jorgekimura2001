import Requisicao from "./controllers/requisicao.controllers.js";

// const data = {
//   username: "Konan_namikaze",
//   
//   avatarUrl: "https://github.com/phmc99.png",
//   ,
// };

const logando = {
    email: "kenziner_topster@gmail.com.br",
    password: "Teste123"
}

// const novoUsuario = await Requisicao.cadastrarUsuario(data)

const logar = await Requisicao.logarUsuario(logando)

console.log(logar);