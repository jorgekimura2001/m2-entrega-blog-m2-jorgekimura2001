export default class CardParaEdicao {
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
        const editar = document.createElement('h4');
        editar.innerHTML = 'Editar';
        const apagar = document.createElement('h4');
        apagar.innerText = 'Apagar';
        const dataPost = document.createElement('p');
        dataPost.innerText = `${data}`;

        rodape.append(editar, apagar, dataPost)
        divAvatar.append(avatar)
        divPost.append(divAvatar, userName, postConteudo, rodape)

        return divPost
    }
}