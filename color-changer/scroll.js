const goToColorChanger = document.getElementById("go-to-color-changer");
const bgColorChanger = document.getElementById("bg-color-changer");
bgColorChanger addEventListener("click", scrollColorChanger);

function scrollColorChanger(){
    goToColorChanger.scrollIntoView({behavior:"smooth", block:"start"});
}