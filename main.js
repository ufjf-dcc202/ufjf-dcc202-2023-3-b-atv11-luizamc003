import { getLista, limpaLista, adicionaNaLista } from "./src/lista.js";

const olItens = document.querySelector("#itens");
const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");

btnLimpar.addEventListener("click", limparIntensDeLista);
btnAdicionar.addEventListener("click", adicionarItemNaLista);

atualizarLista();

function adicionarItemNaLista() {
  const item = pEntrada.textContent;
  adicionaNaLista(item);
  atualizarLista();
  pEntrada.textContent = "";
}

function limparIntensDeLista() {
  limpaLista();
  atualizarLista();
}

function atualizarLista() {
  olItens.innerHTML = "";
  getLista().forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    olItens.appendChild(li);
  });
}
