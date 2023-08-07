// <======== Initializing AOS-Animation JS ========>
AOS.init({
    duration: 1400,
});


// <======== JS Program to Make Carousel of Carousel-Container ========>
const carouselContainerBoxes = document.querySelectorAll(".carousel-container-box");
let scroll;
if (window.innerWidth > 1800) {
    scroll = 102;
}
else if (window.innerWidth < 900 && window.innerWidth > 800) {
    scroll = 106;
}
else {
    scroll = 104;
}

setInterval(() => {
    if (scroll > 424) {
        carouselContainerBoxes.forEach((box) => {
            box.removeAttribute("data-aos")
        })

        scroll = 0;
    }

    carouselContainerBoxes.forEach((box) => {
        box.style.transform = `translateX(${-scroll}%)`

        if (scroll > 0) {
            box.setAttribute("data-aos", "fade-left");
        }
    })

    if (window.innerWidth > 1800) {
        scroll += 102;
    }
    else if (window.innerWidth < 900 && window.innerWidth > 800) {
        scroll += 106;
    }
    else {
        scroll += 104;
    }
}, 6000);


// <======== JS Program to Play & Pause the Video-Cards ========>
const videoCards = [...document.querySelectorAll(".video-card-box")];
videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
        let video = item.children[1];
        video.play();
    })

    item.addEventListener("mouseleave", () => {
        let video = item.children[1];
        video.pause();
    })
})


// <======== JS Program to Make Carousel of Movie-Cards ========>
const moviesCardContainers = [...document.querySelectorAll(".movies-card-container-slider-content")]
const prevBtns = [...document.querySelectorAll(".prev-btn")];
const nextBtns = [...document.querySelectorAll(".next-btn")];

moviesCardContainers.forEach((item, i) => {
    let containerDimension = item.getBoundingClientRect();
    let containerWidth = containerDimension.width;

    prevBtns[i].addEventListener("click", () => {
        item.scrollLeft -= containerWidth + (containerWidth * 10 / 100);
    })

    nextBtns[i].addEventListener("click", () => {
        item.scrollLeft += containerWidth - (containerWidth * 10 / 100);
    })
})