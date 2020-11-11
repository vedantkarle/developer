$(document).ready(function () {
  $("#profile__ripple").ripples({
    resolution: 512,
    dropRadius: 10,
  });

  const bars = document.querySelectorAll(".progress__bar");

  bars.forEach((bar) => {
    let percentage = bar.dataset.percent;
    let tooltip = bar.children[0];
    tooltip.innerText = percentage + "%";
    bar.style.width = percentage + "%";
  });

  //Image Filter

  var $wrapper = $(".portfolio__wrapper");

  $wrapper.isotope({
    filter: "*",
    layoutMode: "masonry",
    animationOptions: {
      duration: 750,
      easing: "linear",
    },
  });

  let links = document.querySelectorAll(".tabs a");

  links.forEach(function (link) {
    let selector = link.dataset.filter;

    link.addEventListener("click", (e) => {
      e.preventDefault();

      $wrapper.isotope({
        filter: selector,
        layoutMode: "masonry",
        animationOptions: {
          duration: 750,
          easing: "linear",
        },
      });

      links.forEach((link) => {
        link.classList.remove("active");
      });

      e.target.classList.add("active");
    });
  });

  //Magnific Popup

  $(".magnify").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
    zoom: {
      enable: true,
    },
  });
});
