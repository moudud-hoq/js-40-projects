const homeContinue = document.getElementById("home-continue");
const getBackTOHome = document.getElementById("home");
homeContinue.addEventListener("click", scrollHome);

function scrollHome() {
  getBackTOHome.scrollIntoView({ behavior: "smooth", block: "start" });
}
