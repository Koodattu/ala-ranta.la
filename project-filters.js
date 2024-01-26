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

    // remove all projects
    const projectsContainer = document.getElementById("filtered-projects");
    while (projectsContainer.firstChild) {
      projectsContainer.removeChild(projectsContainer.firstChild);
    }
    addFilteredProjects(filter.id.replaceAll("project-filter-", ""));
  });
}
