// const pic = document.querySelectorAll('.pic');
const pic = gsap.utils.toArray('.pic');

// console.log(pic);

pic.forEach((item) => {
  // item(= .pic)에 동작 설정
  gsap.from(item, {
    y: 'random(100, 150)',
    duration: 'random(0.5, 1)',
    skewY: 'random(-10, 10)',
    opacity: 0,

    // 스크롤 값과의 연동
    scrollTrigger: {
      trigger: item,
      markers: true,
      start: 'top 60%', // trigger scroller(viewport)
      end: 'bottom 40%',
      toggleClass: 'active',
      toggleActions: 'play none reverse none', // Enter, Leave, EnterBack, LeaveBack
    },
  });
});
