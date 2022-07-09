import CardHeader from "../models/header.model.js";
import Autenticacao from './autenticacao.controller.js';
import CardPostRecente from "../models/postRecentes.model.js";
import CardPostUser from "../models/postUser.model.js";
import NovoPost from "../models/novoPost.model.js";

export default class DashBoard {
  static header = document.querySelector(".topo");
  static main = document.querySelector(".posts");
  
  static async headerInfoUser() {
    const infoUser = await Autenticacao.listarUsuario();
    const avatarUser = infoUser.avatarUrl;
    const username = infoUser.username;
    const divInfoUser = CardHeader.infoUser(avatarUser, username);
    this.header.appendChild(divInfoUser);
  }
  static escutarLogout() {
    const btnLogout = document.querySelector(".btn__logout");

    btnLogout.addEventListener("click", (evt) => {
      evt.preventDefault();
      //  localStorage.clear() -- quando houver o click apagará o id e o token e deverá
      //  mandar para a página inicial
    });
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
        localStorage.setItem("@kenzie-blog:postId", idPost.id);
        window.location.reload(true)
    });
  }

    static async userPostRecent(idPost) {
        const sectionUser = document.createElement('section');
        sectionUser.classList.add('post__user')
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
      dataTratada
    );
      sectionUser.append(cardUser);
      this.main.append(sectionUser);
    }
    
  static async listarPostsRecentes() {
      const postsRecentes = await Autenticacao.listarPosts();
      const sectionPosts = document.createElement('section')
      sectionPosts.classList.add('post__othersUsers')
      const postRecente = postsRecentes.data[0]
      postsRecentes.data.forEach((post) => {
        //   console.log(post)
        //   console.log(post.user.id)
          if (post.id !== postRecente.id) {
             const avatar = post.user.avatarUrl;
             const username = post.user.username;
             const conteudo = post.content;
             const tratativa = post.createdAt
               .split("T")
               .reverse()
               .slice(1)[0]
               .split("-")
               .reverse()
               .join("/");
             const card = CardPostRecente.cardPostRecente(
               avatar,
               username,
               conteudo,
               tratativa
              );
              sectionPosts.append(card);
       }
    
     
      this.main.append(sectionPosts);
    });
  }
//    static escutadorEdicaoPost(){
//        const btnEditar = document.querySelector(".post__user");
//        console.log(btnEditar)
//        btnEditar.addEventListener('click', (e) => {
//            console.log(e)
//        });
//   }
}