// JSON simulado
const produtos = [
  {
    "nome": "CAIO OKUMA",
    "imagem": "../grupo/images/caio.png"
  },
  {
    "nome": "DANIEL BRETZKE",
    "imagem": "../grupo/images/daniel.png"
  },
  {
    "nome": "RAMIRO MARQUES",
    "imagem": "../grupo/images/ramiro.png"
  },
  {
    "nome": "GABRIEL MOLLINARI",
    "imagem": "../grupo/images/gabriel.png"
  }
];

// Renderizando os produtos
const container = document.getElementById("produtos");

produtos.forEach(produto => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}">
    <h2>${produto.nome}</h2>
  `;
  container.appendChild(card);
});
