document.getElementById("menu-toggle").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  const header = document.querySelector("header");
  mobileMenu.classList.toggle("hidden");
  if (!mobileMenu.classList.contains("hidden")) {
    const headerHeight = document.querySelector("header").offsetHeight;
    mobileMenu.style.top = headerHeight + "px";
  }
});

// !Adiciona rolagem suave ao clicar em links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// !Carrossel
document.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.getElementById("carousel");
  const prevButton = document.getElementById("carousel-prev");
  const nextButton = document.getElementById("carousel-next");
  const carouselItems =
    carouselContainer.getElementsByClassName("carousel-item");
  let currentSlide = 0;

  function showSlide(index) {
    for (let i = 0; i < carouselItems.length; i++) {
      carouselItems[i].classList.add("hidden");
    }
    carouselItems[index].classList.remove("hidden");

    // Atualize o número do slide atual
    const slideCounter = document.querySelector(".slide-counter");
    slideCounter.textContent = `${index + 1}/${carouselItems.length}`;
  }

  function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = carouselItems.length - 1;
    }
    showSlide(currentSlide);
  }

  function nextSlide() {
    currentSlide++;
    if (currentSlide >= carouselItems.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }

  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);

  showSlide(currentSlide);
});

// !Modal
// !Modal
const openModalButton = document.getElementById("openModalButton");
const modal = document.getElementById("myModal");
const closeButton = document.querySelector(".modal-close");
const overlay = document.querySelector(".modal-overlay");

openModalButton.addEventListener("click", () => {
  modal.classList.add("opacity-100");
  modal.classList.remove("opacity-0");
  modal.style.pointerEvents = "auto";
});

const closeModal = () => {
  modal.classList.remove("opacity-100");
  modal.classList.add("opacity-0");
  modal.style.pointerEvents = "none";
};

closeButton.addEventListener("click", () => {
  closeModal();
});

overlay.addEventListener("click", () => {
  closeModal();
});

// !Exibir alert de confirmação de agendamento ao fazer submit do formulário
const handleForm = document.getElementById('handleForm');

// Função para manipular o evento de envio do formulário
function handleSubmit(event) {
  event.preventDefault(); // Evita o envio do formulário

  // Validar e processar o formulário aqui...

  // Fechar a modal
  closeModal();

  // Exibir um alerta de agendamento concluído
  alert('Agendamento realizado com sucesso!');
}

// Adicionar o manipulador de eventos de envio ao formulário
handleForm.addEventListener('submit', handleSubmit);


// !Verificação de entrada, apenas Letras
const fullNameInput = document.getElementById("fullName");

fullNameInput.addEventListener("input", () => {
  fullNameInput.value = fullNameInput.value.replace(/[^A-Za-zÀ-ÿ\s]/g, "");
});

