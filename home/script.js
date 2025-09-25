// Função para alternar seções
function mostrar(secao) {
  document.querySelectorAll('.conteudo').forEach(el => {
    el.classList.remove('active');
  });
  document.getElementById(secao).classList.add('active');
}

// Exemplo simples de API (random user)
async function carregarAPI() {
  const res = await fetch('https://randomuser.me/api/');
  const data = await res.json();
  const usuario = data.results[0];
  document.getElementById('apiData').innerHTML =
    `Nome: ${usuario.name.first} ${usuario.name.last} <br> País: ${usuario.location.country}`;
}

// Calculadora simples
function somar() {
  const n1 = parseFloat(document.getElementById('num1').value) || 0;
  const n2 = parseFloat(document.getElementById('num2').value) || 0;
  document.getElementById('resultado').innerText = "Resultado: " + (n1 + n2);
}
