import ComponentesDOM from "./models/componentes.models.js";
import Autenticacao from './controllers/autenticacao.controllers.js'

const listarUsuario = await Autenticacao.listarUsuario();

const avatarUrl = listarUsuario.avatarUrl
const username = listarUsuario.username
    
const header = document.querySelector('.topo')
const infoUser = ComponentesDOM.headerInfoUser(avatarUrl, username);
const btnLogout = ComponentesDOM.btnLogout();
header.append(infoUser, btnLogout)

btnLogout.addEventListener('click', (evt) => {
    evt.preventDefault()
    // localStorage.clear() -- quando houver o click apagará o id e o token e deverá
    // mandar para a página inicial
})

const posts = await Autenticacao.listarPosts()

const postsRecentes = posts.data

postsRecentes.forEach(element => {
    console.log(element)
});