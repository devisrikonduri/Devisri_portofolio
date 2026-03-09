async function loadProjects() {
  const response = await fetch("./projects.json");
  const projects = await response.json();

  const container = document.getElementById("project-cards-container");

  projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-cards");

    card.innerHTML = `
      <div class="project-img">
        <img src="${project.image}" alt="${project.title}">
      </div>

      <div class="project-description">
        <h4>${project.title}</h4>
        <p>${project.description}</p>
        <a href="${project.live}" class="project-link">view</a>
      </div>
    `;

    container.appendChild(card);
  });
}

loadProjects();

const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll("#nav-container a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});