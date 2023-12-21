const projectFilters = document.getElementsByClassName("project-filter");
for (let filter of projectFilters) {
  const buttonElement = document.getElementById(filter.id);
  buttonElement.addEventListener("click", function () {
    // if already active, do nothing
    if (buttonElement.classList.contains("project-filter-enabled")) {
      return;
    }

    // remove all active classes from buttons
    for (let filter of projectFilters) {
      const otherButtonElement = document.getElementById(filter.id);
      otherButtonElement.classList.remove("project-filter-enabled");
    }

    // add active class to clicked button
    buttonElement.classList.add("project-filter-enabled");
  });
}

document.querySelector(".hamburger-button").addEventListener("click", function () {
  document.querySelector(".nav-links").style.display =
    document.querySelector(".nav-links").style.display == "none" ? "block" : "none";
});
