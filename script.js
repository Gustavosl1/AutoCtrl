const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);



const form = document.getElementById('formulario');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const respostas = form.querySelectorAll('select');
  let pontuacao = 0;

  respostas.forEach((select) => {
    pontuacao += parseInt(select.value);
  });

  let mensagem = "";

  if (pontuacao <= 6) {
    mensagem = "✅ Seu foco está equilibrado. Continue mantendo hábitos saudáveis!";
  } else if (pontuacao <= 12) {
    mensagem = "⚠️ Atenção! Você apresenta alguns sinais de dificuldade de foco.";
  } else {
    mensagem = "🚨 Seu nível de distração é alto. Recomendamos procurar orientação profissional.";
  }

  resultado.innerText = mensagem;
  resultado.style.display = "block";
});