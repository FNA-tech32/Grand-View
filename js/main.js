/* Mobile navigation */
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuOpenIcon = document.getElementById("menu-open-icon");
const menuCloseIcon = document.getElementById("menu-close-icon");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    const isOpen = !mobileMenu.classList.contains("hidden");
    mobileMenu.classList.toggle("hidden");
    if (menuOpenIcon && menuCloseIcon) {
      menuOpenIcon.classList.toggle("hidden", !isOpen);
      menuCloseIcon.classList.toggle("hidden", isOpen);
    }
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      if (menuOpenIcon && menuCloseIcon) {
        menuOpenIcon.classList.remove("hidden");
        menuCloseIcon.classList.add("hidden");
      }
    });
  });
}

/* Hero carousel */
const slides = document.querySelectorAll("[data-carousel-slide]");
const dots = document.querySelectorAll("[data-carousel-dot]");
const prevBtn = document.querySelector("[data-carousel-prev]");
const nextBtn = document.querySelector("[data-carousel-next]");
let currentSlide = 0;
let carouselTimer;

function showSlide(index) {
  if (!slides.length) return;
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => {
    slide.classList.toggle("opacity-100", i === currentSlide);
    slide.classList.toggle("opacity-0", i !== currentSlide);
    slide.classList.toggle("z-10", i === currentSlide);
    slide.classList.toggle("z-0", i !== currentSlide);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("bg-white", i === currentSlide);
    dot.classList.toggle("bg-white/50", i !== currentSlide);
  });
}

function startCarousel() {
  if (slides.length < 2) return;
  clearInterval(carouselTimer);
  carouselTimer = setInterval(() => showSlide(currentSlide + 1), 5000);
}

if (slides.length) {
  showSlide(0);
  startCarousel();
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      showSlide(currentSlide - 1);
      startCarousel();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      showSlide(currentSlide + 1);
      startCarousel();
    });
  }
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      showSlide(i);
      startCarousel();
    });
  });
}

/* Modals */
document.querySelectorAll("[data-modal-open]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-modal-open");
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      document.body.classList.add("overflow-hidden");
    }
  });
});

document.querySelectorAll("[data-modal-close]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest("[data-modal]");
    if (modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      document.body.classList.remove("overflow-hidden");
    }
  });
});

document.querySelectorAll("[data-modal]").forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      document.body.classList.remove("overflow-hidden");
    }
  });
});

/* Contact form validation */
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email-contact");
const messageInput = document.getElementById("message");

if (form && nameInput && emailInput && messageInput) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    getInputs();
  });
}

function getInputs() {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (nameValue === "") setFail(nameInput, "Name cannot be blank");
  else setSuccess(nameInput);

  if (emailValue === "") setFail(emailInput, "Email cannot be blank");
  else if (!emailCheck(emailValue)) setFail(emailInput, "Email is not valid");
  else setSuccess(emailInput);

  if (messageValue === "") setFail(messageInput, "Message cannot be blank");
  else setSuccess(messageInput);
}

function setFail(input, message) {
  const control = input.parentElement;
  const small = control.querySelector("small");
  const check = control.querySelector("[data-icon-check]");
  const exclame = control.querySelector("[data-icon-error]");
  if (small) small.innerText = message;
  input.classList.remove("border-green-500");
  input.classList.add("border-red-500");
  if (check) check.classList.add("hidden");
  if (exclame) exclame.classList.remove("hidden");
}

function setSuccess(input) {
  const control = input.parentElement;
  const small = control.querySelector("small");
  const check = control.querySelector("[data-icon-check]");
  const exclame = control.querySelector("[data-icon-error]");
  if (small) small.innerText = "";
  input.classList.remove("border-red-500");
  input.classList.add("border-green-500");
  if (check) check.classList.remove("hidden");
  if (exclame) exclame.classList.add("hidden");
}

function emailCheck(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
