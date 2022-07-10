import CardCadastro from "../models/cadastro.model.js";
import Requisicao from "./requisicao.controller.js";

export default class Cadastro{
    static main = document.querySelector('.cards');
    static cadastroCard (){
        const cardCadastro = CardCadastro.cardCadastro()
        this.main.append(cardCadastro)
    }
    
    static escutarCadastro(){
        const btnCadastro = document.querySelector('.btn__cadastro')
        btnCadastro.addEventListener('click', async (e) => {
            e.preventDefault()
            const newUserData = {}
                const alvo = e.target.closest('button').form
                const inputs = [...alvo];
                inputs.forEach(input => {
                    if(input.value !== ""){
                        newUserData[input.name] = input.value;
                        newUserData[input.name] = input.value;
                        newUserData[input.name] = input.value;
                        newUserData[input.name] = input.value;
                    }
                })
                await Requisicao.cadastrarUsuario(newUserData);
                inputs.forEach(input => input.value = "");
         })
    } 
}