const slide = document.querySelectorAll('.slide');
const nextSlide = document.querySelectorAll(".next");
const scrollbutton = document.querySelector('.scrollButton');
const rekomendasi = document.querySelectorAll('.rekomendasi');
const landing = document.querySelector('.landing');
const main = document.querySelector('main');
const body = document.querySelector('body');
let rekomen = document.querySelectorAll('.rekomen');
let ganti = document.querySelectorAll('.ganti');
const blockbuster = document.querySelector('.blockbuster ');
const anime = document.querySelector('.anime-series');
const movieButton = blockbuster.querySelectorAll('button')
const movieImg = blockbuster.querySelectorAll('img')
const animeImg = anime.querySelectorAll('img')
const animeButton = anime.querySelectorAll('button')
const thumbnail = document.querySelector('.thumbnail')
const close = thumbnail.querySelector('.close')
const photo = document.querySelector('.photo')
const watch = document.querySelector('.watch')
const deskripsi = document.querySelector('.deskripsi')

close.addEventListener('click',() => {
    photo.classList.add('-translate-x-[110%]')
    
        watch.classList.add('-translate-x-[110%]');
    deskripsi.classList.add('-translate-x-[110%]');
    setTimeout(() => {
    thumbnail.style.transform = 'scalex(0)'
    },500)
})

thumbnail.style.transform = 'scalex(0)'

//watch.style.visibility = 'hidden'
//deskripsi.style.visibility = 'hidden'

for(let i = 0;i < movieButton.length;i++){
    movieButton[i].addEventListener(
    'click',() =>{
        
        thumbnail.style.transform = 'scalex(1)'
        photo.src = movieImg[i].src;
        setTimeout(() => {
        photo.classList.remove('-translate-x-[110%]')
            }, 500);
        setTimeout(() => {
        watch.classList.remove('-translate-x-[110%]');
    deskripsi.classList.remove('-translate-x-[110%]');
        }, 700);
        
    })}




slide.forEach((elem, idx) => {
    elem.style.transform = `translateX(${idx * 100}%)`;   
});
 

scrollbutton.addEventListener('click',() =>{
    body.classList.remove('overflow-hidden')
})

scrollbutton.addEventListener('click',() =>{
    window.scrollTo({
  top:window.innerHeight,
  left: 0,
  behavior: "smooth",
});
})

scrollbutton.addEventListener('click',() =>{
    setTimeout(() => {landing.style.display ='none'},700)
})

let curslide = 0;

for(let i = 0; i < nextSlide.length; i++) {
    nextSlide[i].addEventListener("click", function() {
        curslide++;

        slide.forEach((slide, indx) => {
            setTimeout(() => {
                slide.style.transform = `translateX(${100 * (indx - curslide)}%)`;
            }, 10 * indx); // Adjust the delay time (in milliseconds) as needed
        });
    });
}


let index = 0


let slide2 = function(n){
    rekomen.forEach((element) => {
    element.style.display= 'none'
});
    rekomen[n].style.display = 'block'
}
let control = function(n){
    slide2(index = n)
}
slide2(index);


