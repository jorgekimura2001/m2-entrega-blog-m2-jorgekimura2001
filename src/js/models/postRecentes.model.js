export default class CardPostRecente{
    static cardPostRecente(avatarUrl, username, conteudo, data, id){
        const divPost = document.createElement('div');
        divPost.id = id;
        
        const divAvatar = document.createElement('div');
        const avatar = document.createElement('img');
        avatar.src = `${avatarUrl}`;
        avatar.alt = `Foto de perfil`;

        const divInfoPost = document.createElement('div')
        divInfoPost.classList.add('post__info')

        const userName = document.createElement('h3');
        userName.innerText = `${username}`;

        const postConteudo = document.createElement('p');
        postConteudo.innerText = `${conteudo}`;

        const rodape = document.createElement('div');
        rodape.classList.add('post__data')
        const dataPost = document.createElement('p');
        dataPost.innerText = `${data}`;

        divAvatar.append(avatar)
        divInfoPost.append(userName, postConteudo)
        rodape.append(dataPost)
        divPost.append(divAvatar, divInfoPost, rodape)

        return divPost
    }
}