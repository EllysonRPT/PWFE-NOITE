function mostrarImagem(numero) {
    // Oculte todas as imagens
    const imagens = document.querySelectorAll('.img2 img');
    imagens.forEach(imagem => {
        imagem.style.display = 'none';
    });

    // Mostre a imagem selecionada com base no número
    const imagemSelecionada = document.querySelector('.img2 img:nth-child(' + numero + ')');
    if (imagemSelecionada) {
        imagemSelecionada.style.display = 'block';
    }
}
function name(acao) {
    let acao  
}


