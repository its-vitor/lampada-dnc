const lampada = document.getElementById("lampada");

const lightUp = () => {
    if (lampada.src.endsWith('images/broken.svg')) return;
    lampada.src = "images/lit.svg";
}

const turnOff = () => {
    if (lampada.src.endsWith('images/broken.svg')) return;
    lampada.src = "images/off.svg";
}

lampada.addEventListener("click", () => {
    if (!lampada.src.endsWith('images/broken.svg')) lampada.src = "images/broken.svg";
})
