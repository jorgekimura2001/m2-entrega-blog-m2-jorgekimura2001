export default class Header{
    static infoUser(avatarUrl, username){
        const div = document.createElement('div');
        div.classList.add("topo__container");

        const avatar = document.createElement('div');
        avatar.classList.add("topo__userAvatar");

        const imagem = document.createElement('img');
        imagem.src = `${avatarUrl}`;
        imagem.alt = 'Foto de perfil';
        imagem.classList.add('avatar');
        
        const userName = document.createElement('h2');
        userName.classList.add("topo__userName");
        userName.innerText = `${username}`;

        avatar.append(imagem)
        div.append(avatar, userName)
        return div
    }
}