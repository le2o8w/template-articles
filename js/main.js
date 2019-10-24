function scroll(element) {
  window.scrollTo({
    behavior: "smooth",
    left: 0,
    top: element.offsetTop
  });
}

(function() {
  var burger = document.querySelector(".burger-container");
  var nav = document.querySelector("nav.menu");
  var bar = document.querySelectorAll(".bar");
  var button = document.getElementById("discover");
  var form = document.getElementById("contactForm");

  burger.onclick = function() {
    bar[0].classList.toggle("accent");
    bar[0].classList.toggle("rotateH");
    bar[1].classList.toggle("accent");
    bar[1].classList.toggle("rotateA");
    nav.classList.toggle("menu-opened");
  };
  if (form) {
    form.addEventListener("submit", event => {
      var name = document.getElementById("name").value;
      var email = document.querySelector("#email");
      var message = document.querySelector("#message");
      event.preventDefault();
      console.log("%c" + name + "\n" + email + "\n" + message, "background-color:#f8f4f3; color:#000; padding:10px 5px");
    });
  }
  if (button) {    
    button.addEventListener("click", event => {
      event.preventDefault();
      let news = document.getElementById("news");
      scroll(news);
    });
  }
  document.getElementById("top").addEventListener("click", () => {
    let body = document.querySelector("body");
    scroll(body);
  });
})();

