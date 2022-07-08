import ComponentesDOM from "./models/componentes.models.js";
import Requisicao from "./controllers/requisicao.controllers.js";

const mainCards = document.querySelector(".cards");

const cardCadastro = ComponentesDOM.cardCadastro();
mainCards.appendChild(cardCadastro);

const form = document.querySelector(".form__cadastro");
const [
  inputUserName,
  inputUserEmail,
  inputUserAvatar,
  inputUserPassword,
  btnCadastro,
] = form;

function escutadorEvento() {
  const novaPessoa = {};
  btnCadastro.addEventListener("click", async (evt) => {
    evt.preventDefault();
    novaPessoa["username"] = inputUserName.value;
    novaPessoa["email"] = inputUserEmail.value;
    novaPessoa["avatarUrl"] = inputUserAvatar.value;
    novaPessoa["password"] = inputUserPassword.value;
    await Requisicao.cadastrarUsuario(novaPessoa);
    resetar();
  });
}
escutadorEvento();

function resetar() {
  inputUserName.value = "";
  inputUserEmail.value = "";
  inputUserAvatar.value = "";
  inputUserPassword.value = "";
}
