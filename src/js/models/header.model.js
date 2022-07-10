export default class CardHeader{
    static infoUser(avatarUrl, username){
        const infoUser = document.createElement('div');

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

        const btnLogout = document.createElement('button');
        btnLogout.classList.add('btn__logout')
        btnLogout.innerText = "Logout";

        avatar.append(imagem)
        infoUser.append(avatar, userName)
        div.append(infoUser, btnLogout)
        return div
    }
}
