$(function () {
  $("#main .main_contents .icons .left li:nth-child(1)").click(function () {
    $(this).toggleClass("on");
  });

  // #main - typing text
  const content1 = "Hello Designfever!";
  const content = "WELCOME TO \n MY PORTFOLIO.";
  const text = document.querySelector(".text2");
  let i = 0;
  let timer;

  function typing() {
    let txt = content[i++];
    text.innerHTML += txt === "\n" ? "<br/>" : txt;
    if (i >= content.length) {
      clearInterval(timer);
    }
  }

  timer = setInterval(typing, 100);

  // #works - Parallax scroll
  var rellax = new Rellax(".rellax");

  // scroll Event ================================================

  let observerA = new IntersectionObserver((e) => {
    e.forEach((info) => {
      if (info.isIntersecting) {
        info.target.style.opacity = 1;
        info.target.style.marginLeft = "0px";
      } else {
        info.target.style.opacity = 0;
        info.target.style.marginLeft = "-80px";
      }
    });
  });

  let aboutInfo = document.querySelectorAll(".about_info");
  observerA.observe(aboutInfo[0]);

  let observerC = new IntersectionObserver((e) => {
    e.forEach((contactInfo) => {
      if (contactInfo.isIntersecting) {
        contactInfo.target.style.opacity = 1;
      } else {
        contactInfo.target.style.opacity = 0;
      }
    });
  });

  let contactBox = document.querySelectorAll(".contact_info");
  observerC.observe(contactBox[0]);

  // #main scroll Event =================================================
  function applyParallaxEffect() {
    var scrollPosition = window.pageYOffset;
    var innerElement = document.querySelector("#main .inner");

    if (scrollPosition <= 500) {
      var scale = 1 - scrollPosition / 1000;
      var opacity = 1 - scrollPosition / 500;
      innerElement.style.transform =
        "translate(-50%, -50%) scale(" + scale + ")";
      innerElement.style.opacity = opacity;
    } else {
      innerElement.style.transform = "translate(-50%, -50%) scale(0.5)";
      innerElement.style.opacity = 0.3;
    }
  }

  // 초기 로드 시 효과 적용
  document.addEventListener("DOMContentLoaded", applyParallaxEffect);

  // 스크롤 및 뒤로가기 이벤트에 대한 효과 적용
  window.addEventListener("scroll", applyParallaxEffect);
  window.addEventListener("popstate", applyParallaxEffect);
});
