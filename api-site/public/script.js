let time = 2500,
    currentImageIndex = 0, // pegando coleção de imagens que se inicia do 0
    images = document
                .querySelectorAll("#slider img") // pegando tudo que for imagem, com o id SLIDER
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected") // remove a imagem antiga (com o intervalo de tempo)

    currentImageIndex++  // "adicione mais uma imagem"

    if(currentImageIndex >= max) // "adicione mais uma imagem" até chegar ao máximo
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected") // adiciona a próxima imagem com a class ou id SELECTED
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)