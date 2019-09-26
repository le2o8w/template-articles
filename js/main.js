function scroll(element) {
  window.scrollTo({
    behavior: "smooth",
    left: 0,
    top: element.offsetTop
  });
}

function typeEffect(element, speed) {
  var text = element.innerText;
  element.innerHTML = "";

  var i = 0;
  var timer = setInterval(() => {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
  //parent.removeEventListener("click", typeEffect);
}
(function() {
  var burger = document.querySelector(".burger-container");
  var nav = document.querySelector("nav.menu");
  var navMobile = document.querySelector(".nav-mobile");
  var bar = document.querySelectorAll(".bar");
  burger.onclick = function() {
    bar[0].classList.toggle("accent");
    bar[0].classList.toggle("rotateH");

    bar[1].classList.toggle("accent");
    bar[1].classList.toggle("rotateA");

    nav.classList.toggle("menu-opened");
    navMobile.classList.toggle("menu-opened");
  };
  var titles = document.querySelectorAll(".category");
  console.log(titles);
  var offsets = [];
  titles.forEach(titles => {});
  /* var articles = document.querySelectorAll("article");

  articles.forEach(article => {
    article.childNodes.forEach(child => {
      if(child.nodeName === "H3") {
        console.log(coicoi)
      }
    })
    console.log(article.childNodes[1].nodeName);
    //typeEffect(text, 150);
  }); */

  document.getElementById("top").addEventListener("click", () => {
    let body = document.querySelector("body");
    scroll(body);
  });
})();
