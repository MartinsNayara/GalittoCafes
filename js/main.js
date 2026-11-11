document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-link]").forEach((element) => {
    const key = element.dataset.link;
    const destination = SITE_CONFIG[key];

    if (destination && !destination.includes("SEU_") && !destination.includes("SEU-SITE") && !destination.endsWith("0000000000")) {
      element.href = destination;
    } else {
      element.href = "#";
      element.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Este link ainda precisa ser configurado. Edite o arquivo js/config.js.");
      });
    }
  });

  document.getElementById("year").textContent = new Date().getFullYear();
});
