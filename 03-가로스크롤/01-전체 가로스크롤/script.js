gsap.registerPlugin(ScrollTrigger);

const horizonScroll = document.querySelector('.wrap');

// 1. 동작을 정의, 타임라인으로
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: horizonScroll,
    // markers: true,
    start: 'top 0%',
    end: () => '+=' + horizonScroll.offsetWidth,
    pin: true,
    scrub: 1,
  },
});

// 스크롤과 연동해서 구현할 동작
tl.to(horizonScroll, {
  // x: '-300vw',
  x: () => -(horizonScroll.offsetWidth - window.innerWidth),

  // 반드시!!! ease: 'none'
  ease: 'none',
});

const image = gsap.utils.toArray('.pic');
image.forEach((pic) => {
  gsap.from(pic, {
    y: 50,
    autoAlpha: 0,

    // 스크롤과 연동
    scrollTrigger: {
      trigger: pic,
      start: 'left 60%',
      markers: true,

      // 반드시!! 가로 스크롤과 연동되어야 함
      containerAnimation: tl,

      toggleActions: 'play none reverse none',
    },
  });
});
