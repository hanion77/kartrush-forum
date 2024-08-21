const panelMenu = document.querySelectorAll(".panel_menu");
const slideWrapper = document.querySelector('.slidewrapper');
const slideContainer = slideWrapper.querySelector('.slidecontainer');
const slides = slideWrapper.querySelectorAll('.slide');
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
  slide.style.left = `${index*slideWidth}px`; 
});


function showSlide(num) {  
  slideContainer.style.left = `${-num*slideWidth}px`; 
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

slideWrapper.addEventListener('mouseenter', () => {
  clearInterval(timer);
});
slideWrapper.addEventListener('mouseleave', () => {
  autoSlide();
});
