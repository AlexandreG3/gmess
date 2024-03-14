
// Seleciona o elemento header
const header = document.querySelector('.header');

// Adiciona um ouvinte de evento de rolagem à janela
window.addEventListener('scroll', () => {
    // Verifica a posição de rolagem da página
    if (window.scrollY > 100) { // Por exemplo, altere para a posição desejada
        // Quando a página é rolada para baixo, adiciona a classe para mudar a cor do header
        header.classList.add('header-scroll');
    } else {
        // Quando a página é rolada para cima, remove a classe para restaurar a cor original
        header.classList.remove('header-scroll');
    }
});

// ...



// ...


// ...


const imgs = document.querySelectorAll(".slider img");
const dots = document.querySelectorAll(".botao i");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

let currentIndex = 0;
let time = 7000; // Tempo em milissegundos

function startAutoSlide() {
  setInterval(() => {
    nextSlide();
  }, time);
}

function nextSlide() {
  currentIndex >= imgs.length - 1 ? (currentIndex = 0) : currentIndex++;
  defClass(0, currentIndex);
}

function prevSlide() {
  currentIndex <= 0 ? (currentIndex = imgs.length - 1) : currentIndex--;
  defClass(0, currentIndex);
}

startAutoSlide();

leftArrow.addEventListener("click", function () {
  prevSlide();
});

rightArrow.addEventListener("click", function () {
  nextSlide();
});

const defClass = (startPos, index) => {
  for (let i = startPos; i < imgs.length; i++) {
    imgs[i].style.display = "none";
    dots[i].classList.remove("fa-dot-circle");
    dots[i].classList.add("fa-circle");
  }
  imgs[index].style.display = "block";
  dots[index].classList.add("fa-dot-circle");
};

defClass(1, 0);










