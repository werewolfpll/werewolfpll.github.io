const contactBtn = document.getElementById("contactBtn");
const contactMessage = document.getElementById("contactMessage");

if (contactBtn && contactMessage) {
  contactBtn.addEventListener("click", () => {
    contactMessage.innerHTML =
      'E-mail: <a href="mailto:zygmunt.pezda@gmail.com">zygmunt.pezda@gmail.com</a>' +
      ' · GitHub: <a href="https://github.com/werewolfpll" target="_blank" rel="noopener">github.com/werewolfpll</a>';
  });
}
