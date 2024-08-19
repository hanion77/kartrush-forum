const panelMenu = document.querySelectorAll(".panel_menu");

for (let pm of panelMenu) {
  pm.addEventListener("click", (e) => {
    pm.classList.toggle("active");

    panelMenu.forEach((item) => {
      if (pm !== item) {
        item.classList.remove("active");
      }
    });
  });
}
