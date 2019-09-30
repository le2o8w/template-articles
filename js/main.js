(function() {
  var burger = document.querySelector(".burger-container");
  var nav = document.querySelector("nav.menu");
  var bar = document.querySelectorAll(".bar");

  var form = document.getElementById("contactForm");

  burger.onclick = function() {
    bar[0].classList.toggle("accent");
    bar[0].classList.toggle("rotateH");
    bar[1].classList.toggle("accent");
    bar[1].classList.toggle("rotateA");
    nav.classList.toggle("menu-opened");
  };

  form.addEventListener("submit", event => {
    var name = document.getElementById("name").value;
    var email = document.querySelector("#email");
    var message = document.querySelector("#message");
    event.preventDefault();
    console.log("%C" + name, "");
  });
  document.getElementById("top").addEventListener("click", () => {
    let body = document.querySelector("body");
    scroll(body);
  });
})();
function scroll(element) {
  window.scrollTo({
    behavior: "smooth",
    left: 0,
    top: element.offsetTop
  });
}
