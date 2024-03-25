const slide = document.querySelectorAll('.slide');
const nextSlide = document.querySelectorAll('.next');
const scrollButton = document.querySelector('.scrollButton');
const rekomendasi = document.querySelectorAll('.rekomendasi');
const landing = document.querySelector('.landing');
const main = document.querySelector('main');
const body = document.querySelector('body');
const rekomen = document.querySelectorAll('.rekomen');
const ganti = document.querySelectorAll('.ganti');
const blockbuster = document.querySelector('.blockbuster');
const anime = document.querySelector('.anime-series');
const movieButton = blockbuster.querySelectorAll('button');
const movieImg = blockbuster.querySelectorAll('img');
const animeImg = anime.querySelectorAll('img');
const animeButton = anime.querySelectorAll('button');
const thumbnail = document.querySelector('.thumbnail');
const animethumb = document.querySelector('.anime');
const close = thumbnail.querySelector('.close');
const photo = document.querySelector('.photo');
const watch = document.querySelector('.watch');
const deskripsi = document.querySelector('.deskripsi');
const deskripsiAnime = document.querySelector('.deskripsi-anim');
const judul = document.querySelectorAll('.judul');
const animePhoto = document.querySelector('.photo-anim');
const judulAnime = document.querySelector('.judulanime');
const sinopsisAnime = document.querySelector('.sinopsisanime');
const stream = document.querySelector('.stream');
const closeAnime = document.querySelector('.close-anime');
const penghalang = document.querySelector('.penghalang');

slide.forEach((elem, idx) => {
    elem.style.transform = `translateX(${idx * 100}%)`;
});


slide[0].querySelector('h1').addEventListener('animationend', ()=> {
    slide[0].querySelector('span').style.opacity = '1'
    setTimeout(() => {
        slide[0].querySelector('button').style.opacity = '1'
    },400)
})

nextSlide[0].addEventListener('click',() =>{
    setTimeout(() => { 
    slide[1].querySelector('.bungkus').classList.remove('translate-y-[100%]')
        },500)
    setTimeout(() => { 
    slide[1].querySelector('.kotak').classList.remove('translate-x-[100vw]')
        },1300)
})

nextSlide[1].addEventListener('click',() =>{
    setTimeout(() => { 
    slide[2].querySelector('.bungkus').classList.remove('translate-x-[100%]')
        },500)
    setTimeout(() => { 
    slide[2].querySelector('.kotak').classList.remove('-translate-y-[100vh]')
        },1300)
})

slide[3].querySelector('.oval').style.display = 'none'

nextSlide[2].addEventListener('click',() =>{
    setTimeout(() => { 
    slide[3].querySelector('.oval').style.display = 'block'
        },200)
})

slide[3].querySelector('.oval').addEventListener('animationend',() =>{
    slide[3].querySelector('.text').style.opacity = '1'
})

main.style.display = 'none';
scrollButton.addEventListener('click', () => {
    body.classList.remove('overflow-hidden');
    main.style.display = 'flex';
    window.scrollTo({ top: window.innerHeight, left: 0, behavior: 'smooth' });
    setTimeout(() => { landing.style.display = 'none'; }, 700);
});

let curSlide = 0;

for (let i = 0; i < nextSlide.length; i++) {
    nextSlide[i].addEventListener('click', function () {
        curSlide++;
        slide.forEach((slide, indx) => {
            setTimeout(() => {
                slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
            }, 10 * indx);
        });
    });
}

let index = 0;

function slideDisplay(n) {
    rekomen.forEach((element) => {
        element.style.display = 'none';
    });
    rekomen[n].style.display = 'block';
}

function control(n) {
    slideDisplay(index = n);
}

slideDisplay(index);

close.addEventListener('click', () => {
    photo.classList.add('-translate-x-[110%]');
    penghalang.style.display = 'none';
    watch.classList.add('-translate-x-[110%]');
    deskripsi.classList.add('-translate-x-[110%]');
    setTimeout(() => { thumbnail.style.transform = 'scalex(0)'; }, 500);
});

function scrollToElement(elementSelector, offset) {
    const element = document.querySelector(elementSelector);
    if (element) {
        const topOffset = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
}

thumbnail.style.transform = 'scalex(0)';
animethumb.style.transform = 'scalex(0)';
penghalang.style.display = 'none';

for (let i = 0; i < movieButton.length; i++) {
    movieButton[i].addEventListener('click', () => {
        scrollToElement('.thumbnail', 30);
        penghalang.style.display = 'block';
        thumbnail.style.transform = 'scalex(1)';
        photo.src = movieImg[i].src;
        setTimeout(() => { photo.classList.remove('-translate-x-[110%]'); }, 500);
        setTimeout(() => {
            watch.classList.remove('-translate-x-[110%]');
            deskripsi.classList.remove('-translate-x-[110%]');
        }, 700);
        document.querySelector('.sinopsisfilm').textContent = document.querySelectorAll('.sinopsis')[i].textContent;
        const judulfilm = document.querySelector('.judulfilm');
        judulfilm.textContent = judul[i].textContent;
    });
}

for (let i = 0; i < animeButton.length; i++) {
    animeButton[i].addEventListener('click', () => {
        scrollToElement('.anime', 30);
        penghalang.style.display = 'block';
        animethumb.style.transform = 'scalex(1)';
        animePhoto.src = animeImg[i].src;
        setTimeout(() => { animePhoto.classList.remove('-translate-x-[160%]'); }, 500);
        setTimeout(() => {
            stream.classList.remove('-translate-x-[110%]');
            deskripsiAnime.classList.remove('-translate-x-[110%]');
        }, 700);
        sinopsisAnime.textContent = document.querySelectorAll('.synopsis')[i].textContent;
        judulAnime.textContent = document.querySelectorAll('.title')[i].textContent;
    });
}

closeAnime.addEventListener('click', () => {
    animePhoto.classList.add('-translate-x-[160%]');
    penghalang.style.display = 'none';
    stream.classList.add('-translate-x-[110%]');
    deskripsiAnime.classList.add('-translate-x-[110%]');
    setTimeout(() => { animethumb.style.transform = 'scalex(0)'; }, 500);
});
