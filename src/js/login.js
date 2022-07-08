import ComponentesDOM from "./models/componentes.models.js";
import Requisicao from "./controllers/requisicao.controllers.js";

const mainCards = document.querySelector('.cards');

const cardLogin = ComponentesDOM.cardLogin();

mainCards.append(cardLogin)

const form = document.querySelector(".form__login");
const [
  inputUserEmail,
  inputUserPassword,
  btnLogin,
] = form;

function escutadorEvento() {
  const pessoa = {};
  btnLogin.addEventListener("click", async (evt) => {
    evt.preventDefault();
    pessoa["email"] = inputUserEmail.value;
    pessoa["password"] = inputUserPassword.value;
    await Requisicao.logarUsuario(pessoa);
    resetar();
  });
}
escutadorEvento();

function resetar() {
  inputUserEmail.value = "";
  inputUserPassword.value = "";
}