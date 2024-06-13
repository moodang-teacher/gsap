$(function () {
  // console.log(gsap);

  // 기본문법
  // gsap.from('대상', {애니메이션 옵션})

  const TL = gsap.timeline();

  TL.from('nav a', { y: -100, autoAlpha: 0, duration: 1, stagger: 0.1 });
  TL.from('.menu', { y: -100, autoAlpha: 0 }, '-=0.5');
  TL.from(
    '.logo',
    {
      y: -100,
      autoAlpha: 0,
      duration: 0.5,
      ease: 'bounce.out',
      // delay: 1,
    },
    '+=1'
  );

  TL.from('.foot-box', { width: 0 });
  TL.from('.sns-link li', { autoAlpha: 0, y: 20, stagger: 0.2 });
  TL.from('.copyright', { autoAlpha: 0, y: 20 }, '-=0.3');

  TL.from(
    '.bruce-lee-bg',
    {
      autoAlpha: 0,
      scale: 0.9,
      duration: 5,
      ease: 'none',
    },
    1 // 전체 타임라인의 1초 지점으로 이동, 이 후에 나오는 애니메이션도 여길 기준으로 시간 조정
  );

  TL.from('.bruce-lee', {
    autoAlpha: 0,
    scale: 1.2,
    ease: 'power4.inOut',
  });

  TL.from('.title h2 strong', { x: -50, autoAlpha: 0, duration: 1 });
  TL.from(
    '.title h2 span',
    {
      x: -50,
      autoAlpha: 0,
      duration: 1,
      onComplete: () => Splitting(),
    },
    '-=0.8'
  );

  TL.from('.small-bruce-lee', {
    xPercent: 200,
    duration: 0.7,
    ease: 'elastic.out(1, 0.3)',
    onComplete: () => {
      $('.small-bruce-lee').addClass('action');
      moving();
    },
  });

  // 애니메이션의 종료라는 라벨링 --> .seek()
  TL.addLabel('end');

  // 로고를 클릭하면(skip) 종료라는 라벨로 이동
  $('.logo').on('click', () => {
    TL.seek('end');
    $('.small-bruce-lee').addClass('action');
    moving();
  });

  // 괴조음
  const screamSound = $('.scream').get(0);

  // 작은 이소룡을 클릭하면 괴조음 플레이
  $('.small-bruce-lee').on('click', () => screamSound.play());

  // 이소룡 움직이기
  const $window = $(window);
  let x = 0;
  let y = 0;
  let mx = 0;
  let my = 0;
  const speed = 0.09;

  // 마우스가 움직이면 좌표값을 구한다.
  $window.on('mousemove', (e) => {
    // Math.min(a, b) Math.max(a, b)

    x = Math.max(-100, Math.min(200, e.pageX - $window.innerWidth() / 2));
    y = Math.max(-10, Math.min(100, e.pageY - $window.innerHeight() / 2));
  });

  // 대상(이소룡)을 움직이게 하는 함수
  function moving() {
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    $('.bruce-lee').css({
      transform: `translateX(${mx}px)`,
      filter: `blur(${mx * 0.05}px)`,
    });

    $('.bruce-lee-bg').css({
      transform: `translate(${mx * 0.4}px, ${my}px)`,
    });

    $('.title').css({
      transform: `translate(${-mx * 0.4}px, -50%)`,
    });

    requestAnimationFrame(moving);
  }
}); // end : jQuery
