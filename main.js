botaoPesquisar.addEventListener("click", () => { 
    const pesquisa = document.querySelector("#pesquisa").value;
    const altura = document.querySelector("#altura").value;
    const largura = document.querySelector("#largura").value;

    if (largura.length === 0 || altura.length === 0 || pesquisa.length === 0) {
        alert('Preencha os campos corretamente');
    } else {
        // Mostrar indicador de carregamento
        resultado.innerHTML = '<p>Carregando imagem...</p>';
        
        // Criar elemento de imagem com tratamento de erro
        const img = new Image();
        img.id = "img";
        img.onload = function() {
            resultado.innerHTML = '';
            resultado.appendChild(img);
        };
        img.onerror = function() {
            resultado.innerHTML = alert('Erro ao carregar imagem');
        };
        img.src = `https://source.unsplash.com/${largura}x${altura}/?${encodeURIComponent(pesquisa)}`;
    }
});