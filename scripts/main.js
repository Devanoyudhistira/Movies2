const slide = document.querySelectorAll('.slide');
const nextSlide = document.querySelectorAll(".next");
const scrollbutton = document.querySelector('.scrollButton');
const landing = document.querySelector('.landing');
const main = document.querySelector('main');
const body = document.querySelector('body');
let rekomen = document.querySelectorAll('.rekomen');
let ganti = document.querySelectorAll('.ganti')

slide.forEach((elem, idx) => {
    elem.style.transform = `translateX(${idx * 100}%)`;   
});
 

scrollbutton.addEventListener('click',() =>{
    body.classList.remove('overflow-hidden')
})

scrollbutton.addEventListener('click',() =>{
    window.scrollTo({
  top: 10000,
  left: 0,
  behavior: "smooth",
});
})

scrollbutton.addEventListener('click',() =>{
    setTimeout(() => {landing.style.display ='none'},700)
})

let curslide = 0;

for(let i = 0;i < nextSlide.length;i++){
nextSlide[i].addEventListener("click",function() {
    curslide++;
    
    slide.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curslide)}%)`;
    })
})};

let index = 0


let slide2 = function(n){
    rekomen.forEach((element) => {
    element.style.display= 'none'
});
    rekomen[n].style.display = 'block'
}
let control = function(n){
    setTimeout(slide2(index = n),2000 )
    
}
slide2(index)
