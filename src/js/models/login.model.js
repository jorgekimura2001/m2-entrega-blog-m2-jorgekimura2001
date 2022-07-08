export default class CardLogin {
    static cardLogin(){
        const section = document.createElement("section");
        section.classList.add("card__login");

        const titulo = document.createElement("h2");
        titulo.innerText = "Login";

        const form = document.createElement("form");
        form.classList.add("form__login");

        const inputUserEmail = document.createElement("input");
        inputUserEmail.type = "email";
        inputUserEmail.name = "email";
        inputUserEmail.id = "userEmail";
        inputUserEmail.placeholder = "Email";

        const inputUserPassword = document.createElement("input");
        inputUserPassword.type = "password";
        inputUserPassword.name = "password";
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