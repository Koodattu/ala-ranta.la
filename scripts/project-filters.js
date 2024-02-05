function filterProjects() {
  const activeFilters = document.querySelectorAll(".project-filter:not(.filter-disabled)");
  const projects = document.querySelectorAll(".project-container");

  projects.forEach((project) => {
    const tags = Array.from(project.querySelectorAll(".tech-tag")).map((tag) => tag.textContent.toLowerCase());
    let isVisible = Array.from(activeFilters).some((filter) => tags.includes(filter.textContent.toLowerCase()));

    const filterMatched = Array.from(activeFilters).every((filter) => tags.includes(filter.textContent.toLowerCase()));
    if (filterMatched || activeFilters.length === 0) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
    updateDonutChart();
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

document.getElementById("select-none-filter").addEventListener("click", disableAllFilterButtons);

populateFilterTags();
addFilteredProjects("all");

function createDonutChart(selector, data) {
  const width = 150,
    height = 150,
    margin = 12;
  const radius = Math.min(width, height) / 2 - margin;

  const color = d3.scaleOrdinal().range(["#5fc9f9", "#ccc"]); // Colors for visible and hidden projects

  const svg = d3
    .select(selector)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);

  const pie = d3.pie().value((d) => d.value);
  const data_ready = pie(data);

  const arc = d3
    .arc()
    .innerRadius(radius * 0.5)
    .outerRadius(radius * 0.8);
  const outerArc = d3
    .arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9);

  svg
    .selectAll("path")
    .data(data_ready)
    .join("path")
    .attr("d", arc)
    .attr("fill", (d) => color(d.data.key));

  svg
    .selectAll("text")
    .data(data_ready)
    .join("text")
    .text((d) => `${d.data.key}: ${d.data.value}`)
    .attr("transform", (d) => {
      const pos = outerArc.centroid(d);
      const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
      pos[0] = radius * (midangle < Math.PI ? 1 : -1);
      return `translate(${pos})`;
    })
    .style("text-anchor", (d) => {
      const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
      return midangle < Math.PI ? "start" : "end";
    })
    .style("fill", "whitesmoke")
    .style("font-family", "Arial")
    .style("font-size", "14px");

  // Draw polylines connecting slices to labels
  svg
    .selectAll("polyline")
    .data(data_ready)
    .join("polyline")
    .attr("stroke", "whitesmoke")
    .style("fill", "none")
    .attr("stroke-width", 1)
    .attr("points", (d) => {
      const posA = arc.centroid(d);
      const posB = outerArc.centroid(d);
      const posC = outerArc.centroid(d);
      const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
      posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1);
      return [posA, posB, posC];
    });
}

// Function to update the donut chart based on filters
function updateDonutChart() {
  const visibleProjects = document.querySelectorAll(".project-container[style='display: block;']");
  const hiddenProjects = document.querySelectorAll(".project-container[style='display: none;']");

  const data = [
    { key: "Visible", value: visibleProjects.length },
    { key: "Hidden", value: hiddenProjects.length },
  ];

  d3.select("#visibility-chart svg").remove(); // Clear the previous chart
  createDonutChart("#visibility-chart", data);
}

function createInitialDonutChart() {
  fetch("./data/projects.json")
    .then((response) => response.json())
    .then((jsonResponse) => {
      const data = [
        { key: "Visible", value: jsonResponse.projects.length },
        { key: "Hidden", value: 0 },
      ];
      createDonutChart("#visibility-chart", data);
    });
}

createInitialDonutChart();
