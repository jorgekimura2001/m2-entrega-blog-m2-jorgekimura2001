export default class CardCadastro{
    static cardCadastro() {
        const section = document.createElement('section');
        section.classList.add('card__cadastro')

        const titulo = document.createElement('h2');
        titulo.innerText = 'Cadastro';

        const form = document.createElement('form');
        form.classList.add('form__cadastro');

        const inputUserName = document.createElement('input');
        inputUserName.type = 'text';
        inputUserName.name = 'username';
        inputUserName.id = 'userName';
        inputUserName.placeholder = 'Nome de usuário';

        const inputUserEmail = document.createElement("input");
        inputUserEmail.type = "email";
        inputUserEmail.name = "email";
        inputUserEmail.id = "userEmail";
        inputUserEmail.placeholder = "Email";

        const inputUserAvatar = document.createElement("input");
        inputUserAvatar.type = "text";
        inputUserAvatar.name = "avatarUrl";
        inputUserAvatar.id = "userAvatar";
        inputUserAvatar.placeholder = "Foto de perfil";
        
        const inputUserPassword = document.createElement("input");
        inputUserPassword.type = "password";
        inputUserPassword.name = "password";
        inputUserPassword.id = "userPassword";
        inputUserPassword.placeholder = "Senha";
    
        const buttonCadastro = document.createElement('button')
        buttonCadastro.classList.add('btn__cadastro');
        buttonCadastro.innerText = 'Cadastrar'
       
        form.append(inputUserName, inputUserEmail, inputUserAvatar, inputUserPassword, buttonCadastro);
        section.append(titulo, form)

        return section
    }
}

//     static btnLogout() {
//         const buttonLogout = document.createElement("button");
//         buttonLogout.classList.add("btnLogout");
//         buttonLogout.innerText = "Logout";
//         return buttonLogout
//     }

//     static cardPostsRecentes(avatarUrl ) {
//         const cardPost = document.createElement('div');

//         const avatar = document.createElement('div');
//         const imagem = document.createElement('img');
//         imagem.src = `${avatarUrl}`

//         const divPost = document.createElement('div');
//         const username = document.createElement('h3');
//         const post = document.createElement('p');

//         const divRodape = document.createElement('div');
//         const data = document.createElement('p');

//         // só podem aparecer para a pessoa com o id === userId
//         // const editar = document.createElement('h4');
//         // const apagar = document.createElement('h4');

//         avatar.append(imagem)
//         divPost.append(username, post)
//         divRodape.append(data)
//         cardPost.append(avatar, divPost, divRodape)
//         return cardPost
//     }
// }