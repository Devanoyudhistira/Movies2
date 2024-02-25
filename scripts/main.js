const slide = document.querySelectorAll('.slide');

slide.forEach((elem, idx) => {
    elem.style.transform = `translateX(${idx * 100}%)`;   
});


let curslide = 0;

const nextSlide = document.querySelectorAll(".next");
for(let i = 0;i < nextSlide.length;i++){
nextSlide[i].addEventListener("click",function() {
    curslide++;
    
    slide.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curslide)}%)`;
    })
    
})}