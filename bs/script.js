/* =========================================
   SLIDESHOW
========================================= */

const slideshowImages = [

{
image:"assets/slideshow/slide1.jpg",
caption:"Beautiful memories ❤️"
},

{
image:"assets/slideshow/slide2.jpg",
caption:"One of my favorite moments ✨"
},

{
image:"assets/slideshow/slide3.jpg",
caption:"Still makes me smile 🌸"
},

{
image:"assets/slideshow/slide4.jpg",
caption:"Pure happiness 💫"
},

{
image:"assets/slideshow/slide5.jpg",
caption:"A memory I'll always treasure 🎉"
},

{
image:"assets/slideshow/slide6.jpg",
caption:"Special moments 🧸"
},

{
image:"assets/slideshow/slide7.jpg",
caption:"Unforgettable laughs 😂"
},

{
image:"assets/slideshow/slide8.jpg",
caption:"Always memorable 💖"
},

{
image:"assets/slideshow/slide9.jpg",
caption:"Chaos but beautiful ✨"
},

{
image:"assets/slideshow/slide10.jpg",
caption:"One more core memory 🌙"
},

{
image:"assets/slideshow/slide11.jpg",
caption:"Still one of my favorites 💕"
},

{
image:"assets/slideshow/slide12.jpg",
caption:"Golden moments 🌟"
},

{
image:"assets/slideshow/slide13.jpg",
caption:"Smiles everywhere 🎈"
},

{
image:"assets/slideshow/slide14.jpg",
caption:"A beautiful chapter ❤️"
},

{
image:"assets/slideshow/slide15.jpg",
caption:"Never forgetting this ✨"
},

{
image:"assets/slideshow/slide16.jpg",
caption:"Moments that mattered 🌸"
},

{
image:"assets/slideshow/slide17.jpg",
caption:"Too special to forget 💫"
},

{
image:"assets/slideshow/slide18.jpg",
caption:"Another favorite memory 🎂"
},

{
image:"assets/slideshow/slide19.jpg",
caption:"Always appreciated 💖"
},

{
image:"assets/slideshow/slide20.jpg",
caption:"A truly happy moment 🎉"
},

{
image:"assets/slideshow/slide21.jpg",
caption:"Thank you for these memories ❤️"
},

{
image:"assets/slideshow/slide22.jpg",
caption:"Life felt lighter here ✨"
},

{
image:"assets/slideshow/slide23.jpg",
caption:"A moment worth keeping 🌸"
},

{
image:"assets/slideshow/slide24.jpg",
caption:"One more unforgettable day 💫"
},

{
image:"assets/slideshow/slide25.jpg",
caption:"Still smiling about this 🧸"
},

{
image:"assets/slideshow/slide26.jpg",
caption:"Thank you for existing 💕"
},

{
image:"assets/slideshow/slide27.jpg",
caption:"Every memory matters 🎈"
},

{
image:"assets/slideshow/slide28.jpg",
caption:"Forever special ❤️"
}

];

let currentSlide = 0;

let slideInterval;

/* OPEN */

function openSlideshow(){

    document.getElementById("slideshowPopup")
    .style.display = "flex";

    showSlide();

    slideInterval =
    setInterval(nextSlide,3000);
}

/* CLOSE */

function closeSlideshow(){

    document.getElementById("slideshowPopup")
    .style.display = "none";

    clearInterval(slideInterval);
}

/* SHOW */

function showSlide(){

    const slide =
    slideshowImages[currentSlide];

    document.getElementById("slideImage")
    .src = slide.image;

    document.getElementById("slideCaption")
    .innerHTML = slide.caption;
}

/* NEXT */

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slideshowImages.length){

        currentSlide = 0;
    }

    showSlide();
}