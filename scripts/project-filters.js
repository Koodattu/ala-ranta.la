function projectFilterHandler() {
  const projectFilterButtons = document.getElementsByClassName("project-filter");
  for (let filterButton of projectFilterButtons) {
    filterButton.addEventListener("click", function () {
      // if already active, remove active class
      if (filterButton.classList.contains("filter-disabled")) {
        filterButton.classList.remove("filter-disabled");
      } else {
        // add active class to clicked button
        filterButton.classList.add("filter-disabled");
      }
    });
  }
}

function populateFilterTags() {
  fetch("./data/projects.json")
    .then((response) => response.json())
    .then((jsonResponse) => {
      const platforms = new Set();
      const technologies = new Set();

      // Gather all unique platforms and technologies
      jsonResponse.forEach((project) => {
        project.platform.forEach((platform) => platforms.add(platform));
        project.tech.forEach((tech) => technologies.add(tech));
      });

      // Populate platforms
      const platformsContainer = document.querySelector(".project-filters-platform");
      platforms.forEach((platform) => {
        const button = createTagButton(platform);
        platformsContainer.appendChild(button);
      });

      // Populate technologies
      const technologiesContainer = document.querySelector(".project-filters-tech");
      technologies.forEach((tech) => {
        const button = createTagButton(tech, true); // true indicates tech, for class formatting
        technologiesContainer.appendChild(button);
      });

      projectFilterHandler();
    });
}

function createTagButton(tag, isTech = false) {
  const tagTemplate = document.getElementById("filter-tag-template");
  const tagClone = tagTemplate.content.cloneNode(true);
  const button = tagClone.querySelector("button");

  button.textContent = tag;
  let className = tag.toLowerCase().replaceAll(" ", "-").replaceAll(".", "");
  if (isTech) {
    className = className.replaceAll("#", "sharp");
  }
  button.classList.add(className + "-tag");

  return button;
}

populateFilterTags();
addFilteredProjects("all");
