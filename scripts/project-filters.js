function filterProjects() {
  const activeFilters = document.querySelectorAll(".project-filter:not(.filter-disabled)");
  const projects = document.querySelectorAll(".project-container");

  projects.forEach((project) => {
    const tags = Array.from(project.querySelectorAll(".tech-tag")).map((tag) => tag.textContent.toLowerCase());
    let isVisible = Array.from(activeFilters).some((filter) => tags.includes(filter.textContent.toLowerCase()));

    if (isVisible || activeFilters.length === 0) {
      project.style.display = "block"; // Ensure it's part of the layout
      setTimeout(() => project.classList.remove("hidden"), 0); // Remove class with a slight delay to ensure display: block takes effect
    } else {
      project.classList.add("hidden");
      setTimeout(() => (project.style.display = "none"), 500); // Match delay to transition time
    }
  });
}

// Call filterProjects whenever a filter button is clicked
function projectFilterHandler() {
  const projectFilterButtons = document.getElementsByClassName("project-filter");
  Array.from(projectFilterButtons).forEach((filterButton) => {
    filterButton.addEventListener("click", function () {
      this.classList.toggle("filter-disabled");
      filterProjects(); // Update the displayed projects based on the active filters
    });
  });
}

function populateFilterTags() {
  fetch("./data/projects.json")
    .then((response) => response.json())
    .then((jsonResponse) => {
      const platforms = new Set();
      const languages = new Set();
      const frontends = new Set();
      const backends = new Set();
      const tools = new Set();

      // Gather all unique tags
      jsonResponse.projects.forEach((project) => {
        project.tech.platform?.forEach((platform) => platforms.add(platform));
        project.tech.languages?.forEach((language) => languages.add(language));
        project.tech.frontend?.forEach((frontend) => frontends.add(frontend));
        project.tech.backend?.forEach((backend) => backends.add(backend));
        project.tech.tools?.forEach((tool) => tools.add(tool));
      });

      // Function to create and append tag buttons, now includes sorting
      const appendTags = (containerSelector, tags) => {
        const container = document.querySelector(containerSelector);
        const template = document.getElementById("filter-tag-template");
        [...tags].sort().forEach((tag) => {
          // Convert Set to Array and sort
          const clone = template.content.cloneNode(true);
          const button = clone.querySelector("button");
          button.innerText = tag;
          button.classList.add(
            tag.toLowerCase().replaceAll(" ", "-").replaceAll(".", "").replaceAll("#", "sharp") + "-tag"
          );
          container.appendChild(clone);
        });
      };

      // Populate each category
      appendTags(".project-filters-platform > div", platforms);
      appendTags(".project-filters-language > div", languages);
      appendTags(".project-filters-frontend > div", frontends);
      appendTags(".project-filters-backend > div", backends);
      appendTags(".project-filters-tools > div", tools);

      // Add event listeners to each tag button
      projectFilterHandler();
    });
}

function disableAllFilterButtons() {
  document.querySelectorAll(".project-filter").forEach((button) => {
    button.classList.add("filter-disabled");
  });
  filterProjects(); // Re-filter projects after updating the button states
}

function enableAllFilterButtons() {
  document.querySelectorAll(".project-filter").forEach((button) => {
    button.classList.remove("filter-disabled");
  });
  filterProjects(); // Re-filter projects after updating the button states
}

document.getElementById("select-all-filter").addEventListener("click", enableAllFilterButtons);
document.getElementById("select-none-filter").addEventListener("click", disableAllFilterButtons);

populateFilterTags();
addFilteredProjects("all");
