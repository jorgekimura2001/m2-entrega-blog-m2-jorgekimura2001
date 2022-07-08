import CardHeader from "../models/header.model.js";
import Autenticacao from './autenticacao.controller.js';


export default class DashBoard {
    static header = document.querySelector('.topo');

    static async headerInfoUser (){
        const infoUser = await Autenticacao.listarUsuario();
        const avatarUser = infoUser.avatarUrl;
        const username = infoUser.username;
        const divInfoUser = CardHeader.infoUser(avatarUser, username);
        this.header.appendChild(divInfoUser);
    }
    static escutarLogout(){
        const btnLogout = document.querySelector('.btn__logout');

        btnLogout.addEventListener('click', (evt) => {
            evt.preventDefault();
        //  localStorage.clear() -- quando houver o click apagará o id e o token e deverá
        //  mandar para a página inicial
        })
    }
}