// JSON simulado
const produtos = [
  {
    "nome": "Boneco Goku",
    "preco": 79.90,
    "imagem": "https://images.tcdn.com.br/img/img_prod/664029/great_eastern_pelucia_dragon_ball_super_goku_01_2353_1_20220606145945.jpg"
  },
  {
    "nome": "Boneca Bulma",
    "preco": 65.50,
    "imagem": "https://cdn.awsli.com.br/2500x2500/184/184312/produto/144439034/5cf6f93a2d.jpg"
  },
  {
    "nome": "Boneco Vegeta",
    "preco": 59.99,
    "imagem": "https://images.tcdn.com.br/img/img_prod/664029/dragon_ball_z_chibi_vegeta_pelucia_oficial_licenciado_12cm_2491_1_20220606145724.jpg"
  },
  {
    "nome": "Boneco Freeza",
    "preco": 49.90,
    "imagem": "https://m.media-amazon.com/images/I/61wrmoGgJIL.jpg"
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
    <p>R$ ${produto.preco.toFixed(2)}</p>
  `;
  container.appendChild(card);
});
