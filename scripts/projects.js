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
        projectContainer.href = project.link;
        //projectContainer.href = "projects/" + project.title.toLowerCase().replaceAll(" ", "-");

        const projectImageElement = projectClone.querySelector("#project-image");
        projectImageElement.src = "./images/" + project.title.toLowerCase().replaceAll(" ", "-") + ".webp";
        projectImageElement.alt = project.title;

        const projectTitleElement = projectClone.querySelector("#project-title");
        projectTitleElement.innerText = project.title;

        const projectYearElement = projectClone.querySelector("#project-year");
        projectYearElement.innerText = project.year;

        const projectDescriptionElement = projectClone.querySelector("#project-description");
        projectDescriptionElement.innerText = project.subtitle;

        const projectPlatformElement = projectClone.querySelector("#project-tags");
        const tagTemplate = projectClone.querySelector("#tag-template");
        for (let platform of project.platform) {
          const tagClone = tagTemplate.content.cloneNode(true);
          const tagSpan = tagClone.querySelector("span");
          tagSpan.innerText = platform;
          tagSpan.classList.add(platform.toLowerCase().replaceAll(" ", "-").replaceAll(".", "") + "-tag");
          projectPlatformElement.appendChild(tagClone);
        }

        const projectTechElement = projectClone.querySelector("#project-tags");
        for (let tech of project.tech) {
          const tagClone = tagTemplate.content.cloneNode(true);
          const tagSpan = tagClone.querySelector("span");
          tagSpan.innerText = tech;
          tagSpan.classList.add(
            tech.toLowerCase().replaceAll("#", "sharp").replaceAll(" ", "-").replaceAll(".", "") + "-tag"
          );
          projectTechElement.appendChild(tagClone);
        }

        const projectFeaturesElement = projectClone.querySelector("#project-features");
        for (let feature of project.features) {
          const featureElement = document.createElement("li");
          featureElement.innerText = feature;
          projectFeaturesElement.appendChild(featureElement);
        }

        const projectsContainer = document.getElementById("filtered-projects");
        filter = filter.charAt(0).toUpperCase() + filter.slice(1);
        if (filter === "All" || project.platform.includes(filter) || project.tech.includes(filter)) {
          projectsContainer.appendChild(projectClone);
        }
      }
      elementsToObserve = document.querySelectorAll(".hoverable");
    });
}
