export default class CardPostRecente{
    static cardPostRecente(avatarUrl, username, conteudo, data, id){
        const divPost = document.createElement('div');
        divPost.id = id;
        
        const divAvatar = document.createElement('div');
        const avatar = document.createElement('img');
        avatar.src = `${avatarUrl}`;
        avatar.alt = `Foto de perfil`;

        const userName = document.createElement('h3');
        userName.innerText = `${username}`;

        const postConteudo = document.createElement('p');
        postConteudo.innerText = `${conteudo}`;

        const rodape = document.createElement('div');
        rodape.innerText = `${data}`;

        divAvatar.append(avatar)
        divPost.append(divAvatar, userName, postConteudo, rodape)

        return divPost
    }
}