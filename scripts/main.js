const slide = document.querySelectorAll('.slide');
const scrollbutton = document.querySelector('.scrollButton');
const main = document.querySelector('main')
slide.forEach((elem, idx) => {
    elem.style.transform = `translateX(${idx * 100}%)`;   
});
scrollbutton.addEventListener('click',() =>{
    window.scrollTo({
  top: 700,
  left: 0,
  behavior: "smooth",
});
    
})

let curslide = 0;

const nextSlide = document.querySelectorAll(".next");
for(let i = 0;i < nextSlide.length;i++){
nextSlide[i].addEventListener("click",function() {
    curslide++;
    
    slide.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curslide)}%)`;
    })
})}