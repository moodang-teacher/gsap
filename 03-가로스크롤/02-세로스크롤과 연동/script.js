const horizonScroll = document.querySelector('.horizontal-scroll');

const tl = gsap.timeline({
  defaults: { ease: 'none' },
  scrollTrigger: {
    trigger: '.sec4',
    pin: true,
    markers: true,
    start: 'top top',
    end: () => '+=' + horizonScroll.offsetWidth,
    scrub: true,
  },
});

tl.from(horizonScroll, { autoAlpha: 0, duration: 2 });
tl.to(horizonScroll, {
  x: () => -(horizonScroll.offsetWidth - innerWidth),
  duration: 30,
});
tl.to('.fake', { x: 10, delay: 10 });

// 개별 움직임을 가로 스크롤과 연동
gsap.from('.pic1', {
  x: -100,
  autoAlpha: 0,

  scrollTrigger: {
    containerAnimation: tl,
    trigger: '.pic1',
    start: 'left 60%',
    markers: true,
  },
});
