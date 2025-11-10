const mensagens = [
  "💫 Você é luz, mesmo nos dias nublados.",
  "🌸 A calma em você cria mundos lindos.",
  "🌙 O universo sorri quando você acredita.",
  "✨ Você está exatamente onde precisa estar.",
  "💎 Seu brilho é único — e real.",
  "🦋 Cada respiração te aproxima da sua DR.",
  "🌌 Você é o reflexo de tudo que sonha ser."
];

const espelho = document.querySelector('.espelho');
const mensagem = document.getElementById('mensagem');

espelho.addEventListener('click', () => {
  const aleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
  mensagem.innerHTML = aleatoria;
});
