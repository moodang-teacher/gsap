$(function () {
  const visualTL = gsap.timeline({
    // 타임라인의 기본 세팅
    defaults: { duration: 2, ease: "power4.inOut" },
  });

  // 애니메이션 시킬 요소의 기본 세팅
  visualTL.set(".visual .slide2", { opacity: 0 });

  visualTL.from(".visual", { scale: 0.9 });
  visualTL.from(".visual .slide", { scale: 1.3 }, "<");
  visualTL.from(".visual .slide .text", {
    autoAlpha: 0,
    y: 50,
    duration: 1,
    ease: "none",
  });

  // fadeIn/Out
  visualTL.to(".visual .slide1", {
    autoAlpha: 0,
    duration: 3,
    repeat: -1,
    yoyo: true,
    repeatDelay: 1,
  });
  visualTL.to(
    ".visual .slide2",
    {
      autoAlpha: 1,
      duration: 3,
      repeat: -1,
      yoyo: true,
      repeatDelay: 1,
    },
    "<"
  );

  // 타이틀 애니메이션
  // document.querySelectorAll('.about h3 > span:first-child').forEach((title) => {});
  // console.log($('.about h3 > span:first-child'));
  $(".about h3 > span:first-child").each((index, title) => {
    gsap.to(title, {
      x: -200,

      scrollTrigger: {
        trigger: title,
        // markers: true,
        start: "top 80%", // trigger scroller(viewport)
        scrub: 3,
      },
    });
  });

  $(".about h3 > span:last-child").each((index, title) => {
    gsap.to(title, {
      x: 200,

      scrollTrigger: {
        trigger: title,
        // markers: true,
        start: "top 80%",
        scrub: 3,
      },
    });
  });

  // 이미지 애니메이션
  $(".about-con figure").each((index, frame) => {
    const image = $(frame).find("img");
    // console.log(image);

    // figure를 크게 만들기
    gsap.from(frame, {
      scale: 0.8,
      duration: 2,

      scrollTrigger: {
        trigger: frame,
        // markers: true,
        start: "top 50%",
      },
    });

    // img를 작게 만들기
    gsap.from(image, {
      scale: 1.3,
      duration: 2,
      autoAlpha: 0,

      scrollTrigger: {
        trigger: frame,
        // markers: true,
        start: "top 50%",
      },
    });
  });

  // 하단 배너 링크 애니메이션
  // gsap.from('.contact', {
  //   clipPath: 'inset(0% 100% 0% 0%)',
  //   // width: 0,
  //   duration: 3,
  // });
  const contactTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact",
      // markers: true,
      start: "top 70%",
    },
  });

  contactTL.from(".contact", { clipPath: "inset(0% 100% 0% 0%)" });
  contactTL.from(".contact-con", { autoAlpha: 0, y: 50 }, "-=0.3");

  // top버튼 클릭하면 이동
  $(".btn-gotop").on("click", () => {
    $("html, body").stop().animate({
      scrollTop: 0,
    });
  });

  gsap.from(".btn-gotop", {
    autoAlpha: 0,
    y: 30,

    scrollTrigger: {
      trigger: ".about-con",
      start: "top 50%",
      toggleActions: "play none reverse reverse",
      markers: true,
      id: "goTop", // 마커의 아이디
      onEnter: () => console.log("Enter"),
      onLeave: () => console.log("Leave"),
      onEnterBack: () => console.log("EnterBack"),
      onLeaveBack: () => console.log("LeaveBack"),
    },
  });
});
