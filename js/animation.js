var container = document.getElementById("anim_container");
// Set up our animation
var animData = {
  container: container,
  renderer: "svg",
  autoplay: true,
  loop: true,
  path: "json/loader-animation.json",
};

var anim = bodymovin.loadAnimation(animData);

$(document).ready(function () {
  $("body").addClass("hide-scroll");
});
setTimeout(function () {
  $("#anim_container").addClass("hide-loader");
  $("body").removeClass("hide-scroll");
}, 5000);

//Animation Target Elements

ScrollReveal().reveal("section", {
  delay: 500,
  origin: "top",
  duration: 1000,
  easing: "cubic-bezier(0.32, 0.37, 0.73, 0.76)",
});

ScrollReveal().reveal("footer", {
  delay: 500,
  origin: "top",
  duration: 1000,
  easing: "cubic-bezier(0.32, 0.37, 0.73, 0.76)",
});

ScrollReveal().reveal("section h1", {
  delay: 0,
  distance: "60px",
  duration: 1000,
  distance: "0px",
  easing: "cubic-bezier(0.32, 0.37, 0.73, 0.76)",
  opacity: 0.3,
  scale: 0.85,
});

ScrollReveal().reveal("section h2", {
  delay: 0,
  distance: "60px",
  duration: 1000,
  distance: "0px",
  easing: "cubic-bezier(0.32, 0.37, 0.73, 0.76)",
  opacity: 0.3,
  scale: 0.85,
});

ScrollReveal().reveal("section h4", {
  delay: 0,
  distance: "0px",
  duration: 1000,
  easing: "cubic-bezier(0.32, 0.37, 0.73, 0.76)",
  opacity: 0.3,
  scale: 0.85,
  origin: "top",
});

ScrollReveal().reveal("section p", {
  delay: 0,
  origin: "top",
  distance: "60px",
  easing: "cubic-bezier(0.32, 0.37, 0.73, 0.76)",
  opacity: 0.3,
});

ScrollReveal().reveal("section a", {
  delay: 500,
  origin: "bottom",
  distance: "0px",
  easing: "cubic-bezier(0.32, 0.37, 0.73, 0.76)",
});

ScrollReveal().reveal("section ul li", {
  delay: 0,
  origin: "bottom",
  duration: 1000,
  distance: "120px",
  easing: "cubic-bezier(0.32, 0.37, 0.73, 0.76)",
  opacity: 1,
});
ScrollReveal().reveal("footer ul li", {
  delay: 0,
  origin: "bottom",
  duration: 500,
  distance: "90px",
  easing: "cubic-bezier(0.32, 0.37, 0.73, 0.76)",
  opacity: 0.3,
});
ScrollReveal().reveal(".subscription-form", {
  delay: 0,
  origin: "bottom",
  duration: 1000,
  easing: "cubic-bezier(0.32, 0.37, 0.73, 0.76)",
  opacity: 0.3,
});

ScrollReveal().reveal(".logo-holder img", {
  delay: 0,
  distance: "60px",
  origin: "bottom",
  duration: 1000,
  easing: "cubic-bezier(0.32, 0.37, 0.73, 0.76)",
  scale: 0.5,
});
ScrollReveal().reveal(".button", {
  delay: 0,
  origin: "top",
  duration: 1000,
  easing: "cubic-bezier(0.32, 0.37, 0.73, 0.76)",
  opacity: 0.3,
  scale: 0.7,
});

ScrollReveal().reveal(".teams__item", {
  delay: 0,
  distance: "100px",
  origin: "top",
  duration: 1000,
  easing: "cubic-bezier(0.32, 0.37, 0.73, 0.76)",
});

ScrollReveal().reveal(".our-people__img img", {
  delay: 0,
  distance: "60px",
  origin: "right",
  duration: 1000,
  easing: "cubic-bezier(0.32, 0.37, 0.73, 0.76)",
});

ScrollReveal().reveal(".who-img img", {
  delay: 0,
  distance: "60px",
  origin: "left",
  duration: 1000,
  easing: "cubic-bezier(0.32, 0.37, 0.73, 0.76)",
});

ScrollReveal().reveal(".icon-pintile .icon", {
  delay: 0,
  origin: "top",
  duration: 1000,
  easing: "cubic-bezier(0.32, 0.37, 0.73, 0.76)",
  scale: 0.7,
});
ScrollReveal().reveal(".tools-block__item img", {
  delay: 0,
  distance: "60px",
  origin: "bottom",
  duration: 1000,
  easing: "cubic-bezier(0.32, 0.37, 0.73, 0.76)",
  scale: 0.5,
});



//Clean

ScrollReveal().clean(".work-slider__item", ".work-img__content ul li");
ScrollReveal().clean(".work-img__content ul li");
ScrollReveal().clean(".work-img__content .button");
ScrollReveal().clean(".teams__details p");
ScrollReveal().clean(".tab-line-box a");
