const imagens = [
    './img/img-fundo-verde.jpg',
    './img/img-fundo-rosa.jpg',
    './img/img-fundo-azul.jpg',
    './img/img-fundo-verde-mobile.jpg',
    './img/img-fundo-rosa-mobile.jpg',
    './img/img-fundo-azul-mobile.jpg',
    './img/nike1.png',
    './img/nike2.png',
    './img/nike3.png'
];

imagens.forEach(src => {
    const img = new Image();
    img.src = src;
});


let main = document.querySelector("main")

let tenis = document.querySelector(".tenis-nike")

function mudarVisual(cor) {
    tenis.classList.add("sobe");

    // Define o caminho base das imagens
    const fundos = {
        verde: {
            desktop: './img/img-fundo-verde.jpg',
            mobile: './img/img-fundo-verde-mobile.jpg',
            tenis: './img/nike1.png'
        },
        rosa: {
            desktop: './img/img-fundo-rosa.jpg',
            mobile: './img/img-fundo-rosa-mobile.jpg',
            tenis: './img/nike3.png'
        },
        azul: {
            desktop: './img/img-fundo-azul.jpg',
            mobile: './img/img-fundo-azul-mobile.jpg',
            tenis: './img/nike2.png'
        }
    };

    // Detecta se está no mobile
    const isMobile = window.innerWidth <= 930;

    // Aplica imagem de fundo correta
    const imagemFundo = isMobile ? fundos[cor].mobile : fundos[cor].desktop;
    main.style.backgroundImage = `url(${imagemFundo})`;

    // Troca a imagem do tênis com animação
    setTimeout(() => {
        tenis.src = fundos[cor].tenis;
        tenis.classList.remove("sobe");
        tenis.classList.add("desce");

        setTimeout(() => {
            tenis.classList.remove("desce");
        }, 500);
    }, 500);
}