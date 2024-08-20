const panelMenu = document.querySelectorAll(".panel_menu");
const slideWrapper = document.querySelector('.slidewrapper');
const slideContainer = slideWrapper.querySelector('.slidecontainer');
const slides = slideWrapper.querySelectorAll('.slide');
const slideCount = slides.length;
let currentIdx = 0;
let timer;


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

// 슬라이드 초기화
slides.forEach((slide, index) => {
  slide.style.left = '100%'; // 모든 슬라이드를 화면 밖에 위치시킴
});
slides[0].style.left = '0'; // 첫 번째 슬라이드를 화면에 보이게 설정

function showSlide(num) {
  if (currentIdx === num) return;
  
  let currentSlide = slides[currentIdx];
  let nextSlide = slides[num];
  
  nextSlide.style.left = '100%';

  nextSlide.animate(
    [
      { left: '100%' },
      { left: '0%' },
    ],
    { duration: 500, fill: 'forwards' }
  );

  currentSlide.animate(
    [
      { left: '0%' },
      { left: '-100%' },
    ],
    { duration: 500, fill: 'forwards' }
  );

  currentIdx = num;
}
showSlide(0);

function autoSlide() {
  if (timer) clearInterval(timer);

  timer = setInterval(() => {
    let nextIdx = (currentIdx + 1) % slideCount;
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
