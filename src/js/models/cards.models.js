export default class Cards{
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
}