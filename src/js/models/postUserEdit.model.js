export default class CardEdicaoPost {
  static cardEditarPost(avatarUrl, username, data) {
    const divPost = document.createElement("div");
    divPost.classList.add("post__user");

    const divAvatar = document.createElement("div");
    const avatar = document.createElement("img");
    avatar.src = `${avatarUrl}`;
    avatar.alt = `Foto de perfil`;

    const userName = document.createElement("h3");
    userName.innerText = `${username}`;

    const postConteudo = document.createElement("textarea");
    postConteudo.classList.add('post__edit--conteudo')
    postConteudo.name = 'content'

    const rodape = document.createElement("div");
    rodape.classList.add("post__rodape");
    const formEdit_Remove = document.createElement("form");
    const editar = document.createElement("button");
    editar.innerHTML = "Enviar";
    editar.classList.add("post__enviar");
    const cancelar = document.createElement("button");
    cancelar.innerText = "Cancelar";
    cancelar.classList.add("post__cancelar");
    const dataPost = document.createElement("p");
    dataPost.innerText = `${data}`;

    formEdit_Remove.append(editar, cancelar);
    rodape.append(formEdit_Remove, dataPost);
    divAvatar.append(avatar);
    divPost.append(divAvatar, userName, postConteudo, rodape);

    return divPost;
  }
}