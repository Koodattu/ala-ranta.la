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

function addFilteredProjects(filter, limit = 0) {
  fetch("./data/projects.json")
    .then((response) => response.json())
    .then((jsonResponse) => {
      var count = 0;
      for (let project of jsonResponse) {
        count++;
        if (limit > 0 && count > limit) {
          break;
        }
        const projectTemplate = document.getElementById("project-template");
        const projectClone = projectTemplate.content.cloneNode(true);

        const projectContainer = projectClone.querySelector(".project-container");
        projectContainer.href = "projects/" + project.title.toLowerCase().replaceAll(" ", "-");

        const projectImageElement = projectClone.querySelector("#project-image");
        projectImageElement.src = "./images/" + project.title.toLowerCase().replaceAll(" ", "-") + ".webp";
        projectImageElement.alt = project.title;

        const projectTitleElement = projectClone.querySelector("#project-title");
        projectTitleElement.innerText = project.title;

        const projectYearElement = projectClone.querySelector("#project-year");
        projectYearElement.innerText = project.year;

        const projectDescriptionElement = projectClone.querySelector("#project-description");
        projectDescriptionElement.innerText = project.subtitle;

        const projectPlatformElement = projectClone.querySelector("#project-platform");
        const tagTemplate = projectClone.querySelector("#tag-template");
        for (let platform of project.platform) {
          const tagClone = tagTemplate.content.cloneNode(true);
          const tagSpan = tagClone.querySelector("span");
          tagSpan.innerText = platform;
          tagSpan.classList.add(platform.toLowerCase().replaceAll(" ", "-").replaceAll(".", "") + "-tag");
          projectPlatformElement.appendChild(tagClone);
        }

        const projectTechElement = projectClone.querySelector("#project-tech");
        for (let platform of project.tech) {
          const tagClone = tagTemplate.content.cloneNode(true);
          const tagSpan = tagClone.querySelector("span");
          tagSpan.innerText = platform;
          tagSpan.classList.add(
            platform.toLowerCase().replaceAll("#", "sharp").replaceAll(" ", "-").replaceAll(".", "") + "-tag"
          );
          projectTechElement.appendChild(tagClone);
        }

        const projectFeaturesElement = projectClone.querySelector("#project-features");
        for (let feature of project.features) {
          const featureElement = document.createElement("li");
          featureElement.innerText = feature;
          projectFeaturesElement.appendChild(featureElement);
        }

        //const projectLinkElement = projectClone.querySelector("#project-link");
        //projectLinkElement.href = project.link;

        const projectsContainer = document.getElementById("filtered-projects");
        filter = filter.charAt(0).toUpperCase() + filter.slice(1);
        if (filter === "All" || project.platform.includes(filter) || project.tech.includes(filter)) {
          projectsContainer.appendChild(projectClone);
        }
      }
    });
}

addFilteredProjects("all", 3);

function isElementNearMiddle(element) {
  const elementRect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Calculate the middle of the screen
  const middleOfScreen = windowHeight / 2;

  // Check if the element's top or bottom is near the middle of the screen
  return elementRect.top <= middleOfScreen && elementRect.bottom >= middleOfScreen;
}

function handleScroll() {
  if (window.innerWidth <= 768) {
    let elementInView = null;

    elementsToObserve.forEach((element) => {
      if (isElementNearMiddle(element)) {
        elementInView = element;
      }
    });

    // Remove the "hover-effect" class from all elements except the one in view
    elementsToObserve.forEach((element) => {
      if (element !== elementInView) {
        element.classList.remove("hovered");
      }
    });

    // Add the "hover-effect" class to the element in view
    if (elementInView) {
      elementInView.classList.add("hovered");
    }
  }
}

window.addEventListener("scroll", handleScroll);

// Initial check on page load
window.addEventListener("load", handleScroll);

const elementsToObserve = document.querySelectorAll(".hoverable");
