import Cards from "./models/cards.models.js";
import Requisicao from "./controllers/requisicao.controllers.js";

const mainCards = document.querySelector('.cards');

const cardLogin = Cards.cardLogin()

mainCards.append(cardLogin)