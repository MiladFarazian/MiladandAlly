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

// Create the dropdown base
$("<select />").appendTo("nav");

// Create default option "Go to..."
$("<option />", {
  selected: "selected",
  value: "",
  text: "Go to...",
}).appendTo("nav select");

// Populate dropdown with menu items
$("nav a").each(function () {
  var el = $(this);
  $("<option />", {
    value: el.attr("href"),
    text: el.text(),
  }).appendTo("nav select");
});

$("nav select").change(function () {
  window.location = $(this).find("option:selected").val();
});
