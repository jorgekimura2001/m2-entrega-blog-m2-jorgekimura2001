import CardHeader from "../models/header.model.js";
import Autenticacao from './autenticacao.controller.js';
import CardPostRecente from "../models/postRecentes.model.js";
import CardParaEdicao from "../models/postEditar.model.js";

export default class DashBoard {
    static header = document.querySelector('.topo');
    static section = document.querySelector('.post__recent');

    static async headerInfoUser (){
        const infoUser = await Autenticacao.listarUsuario();
        const avatarUser = infoUser.avatarUrl;
        const username = infoUser.username;
        const divInfoUser = CardHeader.infoUser(avatarUser, username);
        this.header.appendChild(divInfoUser);
    }
    static escutarLogout(){
        const btnLogout = document.querySelector('.btn__logout');

        btnLogout.addEventListener('click', (evt) => {
            evt.preventDefault();
        //  localStorage.clear() -- quando houver o click apagará o id e o token e deverá
        //  mandar para a página inicial
        })
    }
    static async listarPostsRecentes(){
        const postsRecentes = await Autenticacao.listarPosts();
        const userName = document.querySelector('.topo__userName');
        const nomeUsuario = userName.innerText
        
        postsRecentes.data.forEach(post => {
            if(nomeUsuario === post.user.username){
                const avatar = post.user.avatarUrl;
                const username = post.user.username;
                const conteudo = post.content;
                const tratativa = post.createdAt.split('T').reverse().slice(1)[0].split('-').reverse().join('/');
                const card = CardParaEdicao.cardPostRecente(avatar, username, conteudo, tratativa);
                this.section.append(card)
            }else{
                const avatar = post.user.avatarUrl;
                const username = post.user.username;
                const conteudo = post.content;
                const tratativa = post.createdAt.split('T').reverse().slice(1)[0].split('-').reverse().join('/');
                const card = CardPostRecente.cardPostRecente(avatar, username, conteudo, tratativa);
                this.section.append(card)
            }
            
        })
    }
}