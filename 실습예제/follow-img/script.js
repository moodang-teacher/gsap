window.addEventListener('load', () => {
  // 대상을 변수에 저장
  const title = document.querySelector('.wrap h1');
  const picList = document.querySelector('.pic-list');
  const listEl = picList.querySelectorAll('li');
  const imgBox = document.querySelector('.img-box');
  const img = imgBox.querySelector('img');

  const tl = gsap.timeline();

  tl.from(title, { x: -100, autoAlpha: 0, duration: 0.5 });
  tl.from(
    listEl,
    {
      autoAlpha: 0,
      y: 50,
      rotation: 10,
      transformOrigin: '0 0',
      stagger: 0.3,
      duration: 1,
      ease: 'bounce.out',
    },
    '<'
  );

  showImage();

  function showImage() {
    gsap.set(imgBox, { scale: 0.8, autoAlpha: 0 });

    listEl.forEach((item, index) => {
      item.addEventListener('mouseenter', () => {
        img.src = `img/newjeans${index + 1}.webp`;
        gsap.to(imgBox, { scale: 1, autoAlpha: 1 });
      });
    });

    picList.addEventListener('mouseleave', () => {
      gsap.to(imgBox, { scale: 0.2, autoAlpha: 0 });
    });

    // .pic-list 영역에서 마우스가 움직이면 할 동작
    let x = 0;
    let y = 0;
    let mx = 0;
    let my = 0;
    const speed = 0.09;

    picList.addEventListener('mousemove', (e) => {
      // console.log(e);

      x = e.pageX;
      y = e.pageY;
    });

    moving();
    function moving() {
      mx += (x - mx) * speed;
      my += (y - my) * speed;

      gsap.to(imgBox, {
        left: mx + 'px',
        top: my + 'px',
        transform: `rotate(-${mx * 0.02}deg)`,
      });

      requestAnimationFrame(moving);
    }
  }
});
