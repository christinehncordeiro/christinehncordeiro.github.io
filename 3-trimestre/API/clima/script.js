const cidade = document.getElementById('cidade');
const botão = document.getElementById('botao');
const resposta = document.getElementById('resposta')

async function PesquisarClima (cidade) {
    const url = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&units=metric&appid=06251a5ff3cd6797ab6b380526b770c6&lang=pt_br");
    const clima = await url.json();

    console.log(clima)

    let condições = Object.values(clima.main.temp).filter(function(tempo) {
        return tempo >= 35 || tempo <= 5;
    });

    console.log(condições);

    if(condições.length == 0) {
        resposta.innerHTML = "<p> A cidade " + clima.name + ", de - "  + clima.sys.country + ", possui a temperatura de " + clima.main.temp + "ºC</p>";
    }
    else {
        resposta.innerHTML = "<p> A cidade " + clima.name + ", de - "  + clima.sys.country +  "está em condições extremas! Possuindo a temperatura de " + clima.main.temp + "ºC, com a umidade de " + clima.main.humidity + "</p>"
    }
}

botão.addEventListener("click", async () => {
    PesquisarClima(cidade.value)
})