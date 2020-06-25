$(".carousel").carousel();

$("body").scrollspy({ target: ".navbar", offset: 50 });

$("#myNavbar a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    var hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      400,
      function () {}
    );
  }
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "15px";
  } else {
    document.getElementById("header").style.fontSize = "30px";
  }
}
