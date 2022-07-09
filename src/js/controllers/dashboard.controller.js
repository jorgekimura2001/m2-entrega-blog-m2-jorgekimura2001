import CardHeader from "../models/header.model.js";
import Autenticacao from './autenticacao.controller.js';
import CardPostRecente from "../models/postRecentes.model.js";
import CardPostUser from "../models/postUser.model.js";
import NovoPost from "../models/novoPost.model.js";
import CardEdicaoPost from "../models/postUserEdit.model.js";

export default class DashBoard {
  static header = document.querySelector(".topo");
  static main = document.querySelector(".posts");
  static sectionPosts = document.createElement('section')
  
  static async headerInfoUser() {
    const infoUser = await Autenticacao.listarUsuario();
    const avatarUser = infoUser.avatarUrl;
    const username = infoUser.username;
    const divInfoUser = CardHeader.infoUser(avatarUser, username);
    this.header.appendChild(divInfoUser);
    const btnLogout = document.querySelector('.btn__logout')
    btnLogout.addEventListener('click', evt => {
      evt.preventDefault()
      localStorage.clear()
      window.location = '../../index.html'
    })
  }
  
  static criarNovoPost() {
    const card = NovoPost.cardNovoPost();
    const section = document.createElement("section");
    section.classList.add("post__new");
    section.append(card);
    this.main.append(section);
  }

  static escutadorNovoPost() {
    const buttonNovoPost = document.querySelector(".btn__novoPost");
    buttonNovoPost.addEventListener("click", async (evt) => {
      evt.preventDefault();
      const valuePost = {};
      const alvo = evt.target.form;
      const value = alvo.firstChild;
      valuePost[value.name] = value.value;
      const idPost = await Autenticacao.criarPost(valuePost);
      this.userPostRecent(idPost.id)
      window.location.reload(true)
    });
  }

  static async userPostRecent(idPost) {
    const postRecente = await Autenticacao.listarInfoPost(idPost);
    const avatarUser = postRecente.user.avatarUrl;
    const username = postRecente.user.username;
    const conteudo = postRecente.content;
    const dataTratada = postRecente.createdAt
      .split("T")
      .reverse()
      .slice(1)[0]
      .split("-")
      .reverse()
      .join("/");
    const cardUser = CardPostUser.cardPostRecente(
      avatarUser,
      username,
      conteudo,
      dataTratada,
    );
      this.sectionPosts.append(cardUser);
    this.main.append(this.sectionPosts);
    }
    
  static async listarPostsRecentes() {
    const postsRecentes = await Autenticacao.listarPosts();
    this.sectionPosts.classList.add('post__recent');
    
    postsRecentes.data.forEach(async (post) => {
      const usuarioUsername = document.querySelector(".topo__userName");
      const usernameValue = usuarioUsername.innerText;
         if (post.user.username !== usernameValue) {
             const avatar = post.user.avatarUrl;
             const username = post.user.username;
             const conteudo = post.content;
             const dataTratada = post.createdAt
               .split("T")
               .reverse()
               .slice(1)[0]
               .split("-")
               .reverse()
             .join("/");
           const id = post.id
             const card = await CardPostRecente.cardPostRecente(
               avatar,
               username,
               conteudo,
               dataTratada, 
               id
              );
              this.sectionPosts.append(card);
         } else {
           const avatar = post.user.avatarUrl;
           const username = post.user.username;
           const conteudo = post.content;
           const dataTratada = post.createdAt
             .split("T")
             .reverse()
             .slice(1)[0]
             .split("-")
             .reverse()
             .join("/");
           const id = post.id
           const card = await CardPostUser.cardPostRecente(
             avatar,
             username,
             conteudo,
             dataTratada,
             id
           );
           this.sectionPosts.append(card);
           const btnEditar = document.querySelector('.post__edit')
           console.log(btnEditar)
           btnEditar.addEventListener('click', (evt) => {
             evt.preventDefault()
             const alvo = evt.target.form.closest('div').parentElement;
             const dados = [...alvo.childNodes]
             const avatar = dados[0].firstChild.src
             const username = dados[1].innerText
             const conteudo = dados[2].innerText
             const data = dados[3].lastChild.innerText
             const cardEdicao = CardEdicaoPost.cardEditarPost(avatar, username, data)
             const id = alvo.id
             alvo.innerHTML = "";
             alvo.appendChild(cardEdicao);
             const btnEnviarEdit = document.querySelector(".post__enviar");
             btnEnviarEdit.addEventListener('click', async (e) => {
               e.preventDefault()
               const postEditado = {};
               const textarea = document.querySelector('.post__edit--conteudo')
               const newConteudo = textarea.value;
               postEditado[textarea.name] = textarea.value;
               await Autenticacao.editarPost(id, postEditado)
               const conteudoEdit = CardPostUser.cardPostRecente(
                 avatar,
                 username,
                 newConteudo,
                 data
               );
               this.sectionPosts.removeChild(alvo);
               this.sectionPosts.appendChild(conteudoEdit);
               window.location.reload(true)
             })
             const btnCancelarEdit = document.querySelector('.post__cancelar')
             btnCancelarEdit.addEventListener('click', (e) => {
               e.preventDefault()
               const conteudoAnterior = CardPostUser.cardPostRecente(
                 avatar,
                 username,
                 conteudo,
                 data
               );
               this.sectionPosts.removeChild(alvo);
               this.sectionPosts.appendChild(conteudoAnterior);
             })
           })
           const btnApagarPost = document.querySelector('.post__remove')
           btnApagarPost.addEventListener('click', async (evt) => {
             evt.preventDefault()
             const alvo = evt.target.form.closest('div').parentElement
             const idApagar = alvo.id
             await Autenticacao.apagarPost(idApagar)
             window.location.reload(true)
           })
      }
        this.main.append(this.sectionPosts);
    });
  }
}