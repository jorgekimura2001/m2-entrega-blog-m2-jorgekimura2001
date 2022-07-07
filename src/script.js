import Requisicao from "./controllers/requisicao.controllers.js";
import Autenticacao from "./controllers/autenticacao.controllers.js";

const logando = {
    email: "kenziner_topster@gmail.com.br",
    password: "Teste123"
}

const usuario = await Autenticacao.listarUsuario(1927)

const logar = await Requisicao.logarUsuario(logando)

console.log(logar);

console.log(usuario)