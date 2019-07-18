
function carregar() {
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    msg.innerText = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
        img.src = "manha.png";
        document.body.style.background = "#e5dc80";
    } else if (hora >= 12 && hora <= 18) {
        img.src = "tarde.png";
        document.body.style.background = "#ff932d";

    } else {
        img.src = "noite.png";
        document.body.style.background = "#81436b";
    }
}

