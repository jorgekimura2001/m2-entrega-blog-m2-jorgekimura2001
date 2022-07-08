import CardLogin from "../models/login.model.js";
import Requisicao from "./requisicao.controller.js";

export default class Login{
    static main = document.querySelector('.cards');

    static loginCard (){
        const cardLogin = CardLogin.cardLogin()
        this.main.append(cardLogin)
    }
    static escutarLogin(){
        const btnLogin = document.querySelector('.btn__login');
        btnLogin.addEventListener('click', async (e) => {
            e.preventDefault();
            const pessoa = {}
            const alvo = e.target.closest('button').form
            const inputs = [...alvo]
            inputs.forEach(input => {
                if(input.value !== ""){
                    pessoa[input.name] = input.value;
                    pessoa[input.name] = input.value;
                }
            })
            await Requisicao.logarUsuario(pessoa);
            inputs.forEach(input => input.value == "")
        })
    }

  
}