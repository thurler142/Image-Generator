const botaoPesquisar = document.querySelector("#botaoPesquisar");
const resultado = document.querySelector("#resultado");

botaoPesquisar.addEventListener("click", () => { 
    const pesquisa = document.querySelector("#pesquisa").value;
    const altura = document.querySelector("#altura").value;
    const largura = document.querySelector("#largura").value;

    if (largura.lenght || altura.length === 0 || pesquisa.length === 0) {
        alert('Preencha os campos corretamente');
    } else {
        resultado.innerHTML = `<img id="img" src="https://source.unsplash.com/${largura}x${altura}/?${pesquisa}">`;
    }
});
