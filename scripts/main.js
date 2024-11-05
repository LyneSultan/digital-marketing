document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

document.getElementById("back-to-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const animateCircle = () => {
  gsap.to(".circle-image", {
    rotation: 360,
    ease: "power1.inOut",
    duration: 5,
    repeat: -1,                  // Infinite repeat
    paused: false
  });
};

animateCircle();


gsap.registerPlugin(MotionPathPlugin);

gsap.to(".word", {
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
  motionPath: {
    path: [{ x: 0, y: -100 }, { x: 100, y: 0 }, { x: 0, y: 100 }, { x: -100, y: 0 }],
    curviness: 1.5,
    autoRotate: false
  }
});


