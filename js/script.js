const panelMenu = document.querySelectorAll(".panel_menu");
const slideWrapper = document.querySelector(".slidewrapper");
const slideContainer = slideWrapper.querySelector(".slidecontainer");
const slides = slideWrapper.querySelectorAll(".slide");
const slideWidth = 478;
const slideCount = slides.length;
let currentIdx = 0;
let timer;

console.log(slideCount);

for (let pm of panelMenu) {
  pm.addEventListener("click", () => {
    pm.classList.toggle("active");

    panelMenu.forEach((item) => {
      if (pm !== item) {
        item.classList.remove("active");
      }
    });
  });
}

slides.forEach((slide, index) => {
  slide.style.left = `${index * slideWidth}px`;
});

function showSlide(num) {
  slideContainer.style.left = `${-num * slideWidth}px`;
  currentIdx = num;
}
showSlide(0);

function autoSlide() {
  timer = setInterval(() => {
    let nextIdx = (currentIdx + 1) % (slideCount - 1);
    showSlide(nextIdx);
  }, 3000);
}
autoSlide();

slideWrapper.addEventListener("mouseenter", () => {
  clearInterval(timer);
});
slideWrapper.addEventListener("mouseleave", () => {
  autoSlide();
});




document.addEventListener('DOMContentLoaded', function () {
  const scrollContainer = document.querySelector('.horizontal_scroll');

  scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
  });

  let isDown = false;
  let startX;
  let scrollLeft;

  scrollContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    scrollContainer.classList.add('active');
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
  });

  scrollContainer.addEventListener('mouseleave', () => {
    isDown = false;
    scrollContainer.classList.remove('active');
  });

  scrollContainer.addEventListener('mouseup', () => {
    isDown = false;
    scrollContainer.classList.remove('active');
  });

  scrollContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainer.scrollLeft = scrollLeft - walk;
  });
});
