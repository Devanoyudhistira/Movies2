const slide = document.querySelectorAll('.slide');
const nextSlide = document.querySelectorAll(".next");
const scrollbutton = document.querySelector('.scrollButton');
const landing = document.querySelector('.landing');
const main = document.querySelector('main');
const body = document.querySelector('body');
let rekomen = document.querySelectorAll('.rekomen');
let ganti = document.querySelectorAll('.ganti');




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


function isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  function loadMoreContent() {
    const content = document.querySelector('main');
    const items = content.querySelectorAll('.scroll-elem');
    const numItems = items.length;
    
    // Clone the existing items and append them dynamically
    for (let i = 0; i < 1; i++) {
      const clonedItem = items[i % numItems].cloneNode(true); // Get the item to clone
      content.appendChild(clonedItem);
    }
  }

  // Event listener for scroll event
  document.querySelector('main').addEventListener('scroll', function() {
    if (isBottom(this)) {
      loadMoreContent();
    }
  });

  // Initial load
  loadMoreContent();

window.addEventListener('beforeunload', function() {
    // Scroll to the top of the page
    landing.style.display='block'
});


window.addEventListener('beforeunload', function() {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
});




