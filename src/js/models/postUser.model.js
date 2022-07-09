export default class CardPostUser {
    static cardPostRecente(avatarUrl, username, conteudo, data, id){
        const divPost = document.createElement('div');
        divPost.classList.add('post__user')
        divPost.id = id

        const divAvatar = document.createElement('div');
        const avatar = document.createElement('img');
        avatar.src = `${avatarUrl}`;
        avatar.alt = `Foto de perfil`;

        const userName = document.createElement('h3');
        userName.innerText = `${username}`;

        const postConteudo = document.createElement('p');
        postConteudo.innerText = `${conteudo}`;

        const rodape = document.createElement('div');
        rodape.classList.add('post__rodape')
        const formEdit_Remove = document.createElement('form');
        const editar = document.createElement('button');
        editar.innerHTML = 'Editar';
        editar.classList.add('post__edit');
        editar.type = 'button'
        const apagar = document.createElement('button');
        apagar.innerText = 'Apagar';
        apagar.classList.add('post__remove');
        const dataPost = document.createElement('p');
        dataPost.innerText = `${data}`;

        formEdit_Remove.append(editar, apagar)
        rodape.append(formEdit_Remove, dataPost)
        divAvatar.append(avatar)
        divPost.append(divAvatar, userName, postConteudo, rodape)

        return divPost
    }
}