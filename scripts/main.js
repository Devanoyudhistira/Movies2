const slide = document.querySelectorAll('.slide');
const scrollbutton = document.querySelector('.scrollButton');
const landing = document.querySelector('.landing');
const main = document.querySelector('main');
const body = document.querySelector('body');

slide.forEach((elem, idx) => {
    elem.style.transform = `translateX(${idx * 100}%)`;   
});
scrollbutton.addEventListener('click',() =>{
    window.scrollTo({
  top: 10000,
  left: 0,
  behavior: "smooth",
});
})

scrollbutton.addEventListener('click',() =>{
    body.classList.remove('overflow-hidden')
})

scrollbutton.addEventListener('click',() =>{
    setTimeout(() => {landing.style.display ='none'},700)
})

let curslide = 0;

const nextSlide = document.querySelectorAll(".next");
for(let i = 0;i < nextSlide.length;i++){
nextSlide[i].addEventListener("click",function() {
    curslide++;
    
    slide.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curslide)}%)`;
    })
})};

const cegah = function(event){
  event.preventDefault()
};
cegah
