const pic = gsap.utils.toArray('.pic');

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
      // markers: true,
      start: 'top 60%',
      end: 'bottom 40%',
      toggleClass: 'active',
      toggleActions: 'play none reverse none',
    },
  });
});

// 영역별로 스크롤트리거 설정
const sectionEl = gsap.utils.toArray('.slider section');

sectionEl.forEach((sec) => {
  ScrollTrigger.create({
    trigger: sec,
    markers: true,
    start: 'top top',
    end: 'bottom top',
    pin: true, // 영역을 고정
    pinSpacing: false, // 고정된 핀 사이에 보이는 여백을 없애라
  });
});
