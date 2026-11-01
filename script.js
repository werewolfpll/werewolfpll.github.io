const contactBtn = document.getElementById("contactBtn");
const contactMessage = document.getElementById("contactMessage");

if (contactBtn && contactMessage) {
  contactBtn.addEventListener("click", () => {
    contactMessage.innerHTML =
      'E-mail: <a href="mailto:zygmunt.pezda@gmail.com">zygmunt.pezda@gmail.com</a>' +
      ' · GitHub: <a href="https://github.com/werewolfpll" target="_blank" rel="noopener">github.com/werewolfpll</a>' +
      ' · LinkedIn: <a href="https://www.linkedin.com/in/zygmunt-pezda-69065a2a8/" target="_blank" rel="noopener">zygmunt-pezda</a>' +
      ' · Discord: <a href="https://discord.gg/YKsKH89b9" target="_blank" rel="noopener">Dołącz do mojego serwera Discord</a>';
  });
}
