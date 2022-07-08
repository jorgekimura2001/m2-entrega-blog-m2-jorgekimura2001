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

const sectionPostRecente = document.querySelector('.post__recent')

postsRecentes.forEach(element => {
    const avatar = element.user.avatarUrl;
    const username = element.user.username;
    const post = element.content;
    const tratativa = element.createdAt.split('T').reverse().slice(1)[0].split('-').reverse()
    tratativa.forEach(elem => {
        console.log(elem)
    })
        
        //.replace('T', '-').replace('Z', '').split('-').reverse()
        //.splice(-3, 3)
    const dataTratada = Number(tratativa)
    const data = dataTratada.toString()
    console.log(tratativa);
    
    const cardPostRecente = ComponentesDOM.cardPostsRecentes(avatar, username, post, )
});