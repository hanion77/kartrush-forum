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


function autoSlide(){
  timer = setInterval(()=>{
    let nextIdx = (currentIdx + 1)%slideCount;

    showSlide(nextIdx);
  }, 3000);
}
autoSlide();

slideWrapper.addEventListener('mouseenter',()=>{
  clearInterval(timer);
})
slideWrapper.addEventListener('mouseleave',()=>{
  autoSlide();
})