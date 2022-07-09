export default class CardPostUser {
    static cardPostRecente(avatarUrl, username, conteudo, data){
        const divPost = document.createElement('div');
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
        const editar = document.createElement('button');
        editar.innerHTML = 'Editar';
        editar.classList.add('post__edit');
        const apagar = document.createElement('button');
        apagar.innerText = 'Apagar';
        apagar.classList.add('post__remove');
        const dataPost = document.createElement('p');
        dataPost.innerText = `${data}`;

        rodape.append(editar, apagar, dataPost)
        divAvatar.append(avatar)
        divPost.append(divAvatar, userName, postConteudo, rodape)

        return divPost
    }
}