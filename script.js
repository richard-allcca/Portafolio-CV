/* ********** Menu ********** */
((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);

/* ********** Formulario ********** */
((d) => {
  const $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $loader.classList.remove("none");

    fetch("https://formsubmit.co/ajax/richard_allcca_llano@hotmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        location.hash = "#gracias";
        $form.reset();
      })
      .catch((err) => {
        let message = err.statusText || "Ocurrio un error";
        $response.querySelector(
          "h3"
        ).innerHTML = `Error ${err.statusCode}: ${message}`;
      })
      .finally(() => {
        $loader.classList.add("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });
})(document);
document.addEventListener("click", (e) => {
  const $title1 = document.querySelector(".text-lg-right aside"),
    $title2 = document.querySelector(".title2 h2"),
    $cards = document.querySelectorAll(".service-card");
  console.log($cards);
  if (e.target.textContent === "Acerca") {
    $title1.classList.add("animate__fadeInLeft");
    $title2.classList.add("animate__fadeInRight");
  } else {
    $title1.classList.remove("animate__fadeInLeft");
    $title2.classList.remove("animate__fadeInRight");
  }
  if (e.target.textContent === "Servicios") {
    $cards.forEach((card) => {
      card.classList.add("animate__bounce");
    });
  } else {
    $cards.forEach((card) => {
      card.classList.remove("animate__bounce");
    });
  }
});
