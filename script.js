function carregar() {
    let Mensagem = document.getElementById('msg');
    let foto = document.getElementById('foto');
    let Data = new Date();
    let Hora = Data.getHours();
    Mensagem.innerHTML = `Agora são ${Hora} Horas!`;

    if (Hora >= 0 && Hora < 12)
    {
        foto.innerHTML = '<img id="foto" src="manha.jpg" alt="Foto do dia">'
    }

    if(Hora >= 12 && Hora < 18) 
    {
        foto.innerHTML = '<img id="foto" src="tarde.jpg" alt="Foto do dia">'
    }

    if (Hora >= 18 && Hora < 24)
    {
        foto.innerHTML = '<img id="foto" src="noite.jpg" alt="Foto do dia">'
    }
}
