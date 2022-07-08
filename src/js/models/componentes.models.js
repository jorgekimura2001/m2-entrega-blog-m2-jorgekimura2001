export default class ComponentesDOM{
    static cardCadastro() {
        const section = document.createElement('section');
        section.classList.add('card__cadastro')

        const titulo = document.createElement('h2');
        titulo.innerText = 'Cadastro';

        const form = document.createElement('form');
        form.classList.add('form__cadastro');

        const inputUserName = document.createElement('input');
        inputUserName.type = 'text';
        inputUserName.name = 'userName';
        inputUserName.id = 'userName';
        inputUserName.placeholder = 'Nome de usuário';

        const inputUserEmail = document.createElement("input");
        inputUserEmail.type = "email";
        inputUserEmail.name = "userEmail";
        inputUserEmail.id = "userEmail";
        inputUserEmail.placeholder = "Email";

        const inputUserAvatar = document.createElement("input");
        inputUserAvatar.type = "text";
        inputUserAvatar.name = "userAvatar";
        inputUserAvatar.id = "userAvatar";
        inputUserAvatar.placeholder = "Foto de perfil";
        
        const inputUserPassword = document.createElement("input");
        inputUserPassword.type = "password";
        inputUserPassword.name = "userPassword";
        inputUserPassword.id = "userPassword";
        inputUserPassword.placeholder = "Senha";
    
        const buttonCadastro = document.createElement('button')
        buttonCadastro.classList.add('btn__cadastro');
        buttonCadastro.innerText = 'Cadastrar'

        form.append(inputUserName, inputUserEmail, inputUserAvatar, inputUserPassword, buttonCadastro);
        section.append(titulo, form)

        return section
    }

    static cardLogin() {
        const section = document.createElement("section");
        section.classList.add("card__login");

        const titulo = document.createElement("h2");
        titulo.innerText = "Login";

        const form = document.createElement("form");
        form.classList.add("form__login");

        const inputUserEmail = document.createElement("input");
        inputUserEmail.type = "email";
        inputUserEmail.name = "userEmail";
        inputUserEmail.id = "userEmail";
        inputUserEmail.placeholder = "Email";

        const inputUserPassword = document.createElement("input");
        inputUserPassword.type = "password";
        inputUserPassword.name = "userPassword";
        inputUserPassword.id = "userPassword";
        inputUserPassword.placeholder = "Senha";

        const buttonLogin = document.createElement("button");
        buttonLogin.classList.add("btn__login");
        buttonLogin.innerText = "Login";

        form.append(
          inputUserEmail,
          inputUserPassword,
          buttonLogin
        );
        section.append(titulo, form);

        return section;
    }

    static headerInfoUser(avatarUrl, username){
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

    static btnLogout() {
        const buttonLogout = document.createElement("button");
        buttonLogout.classList.add("btnLogout");
        buttonLogout.innerText = "Logout";
        return buttonLogout
    }

    static cardPostsRecentes(avatarUrl ) {
        const cardPost = document.createElement('div');

        const avatar = document.createElement('div');
        const imagem = document.createElement('img');
        imagem.src = `${avatarUrl}`

        const divPost = document.createElement('div');
        const username = document.createElement('h3');
        const post = document.createElement('p');

        const divRodape = document.createElement('div');
        const data = document.createElement('p');

        // só podem aparecer para a pessoa com o id === userId
        // const editar = document.createElement('h4');
        // const apagar = document.createElement('h4');

        avatar.append(imagem)
        divPost.append(username, post)
        divRodape.append(data)
        cardPost.append(avatar, divPost, divRodape)
        return cardPost
    }
}