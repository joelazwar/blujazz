//randomize background
var num = Math.ceil( Math.random() * 5 );

let bg = document.querySelector('#bg')
let bg_src = document.querySelector('#bg-video')
bg_src.src=`/images/bg/canvas${num}.mp4`
bg.load();

//carousel script
const track=document.querySelector('.track')
const slides = Array.from(track.children)
const nextBtn = document.querySelector('.btn-right')
const prevBtn = document.querySelector('.btn-left')

const slideWidth = slides[0].getBoundingClientRect().width;
let curSlide = 0;

let maxSlide = slides.length - 1;

slides.forEach((slide,indx)=>{
  slide.style.transform = `translateX(${indx * 100}%)`;
})

nextBtn.addEventListener("click", e=>{
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

prevBtn.addEventListener("click", e=>{
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});