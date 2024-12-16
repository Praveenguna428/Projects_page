// Define your projects
const projects = [
    {
        title: "Words Counter",
        description: "The Word Counter Project is a simple yet powerful tool designed to count the number of words and characters in a given text.",
        image: "https://addons.mozilla.org/user-media/previews/full/189/189816.png?modified=1622132788",
        links: [
            { label: "View Code", url: "https://github.com/Praveenguna428/html-simple-projects" },
            { label: "View Project", url: "https://craftycodeverse.blogspot.com/2024/06/elegant-word-counter.html" }
        ]
    },
    {
        title: "Password Validator",
        description: "The Password Validator Project is a user-friendly tool that evaluates the strength of a password based on various security criteria.",
        image: "https://miro.medium.com/v2/resize:fit:1400/1*Z5a-S7pre8ZYYh1PYpdU_w.png",
        links: [
            { label: "View Code", url: "https://github.com/Praveenguna428/html-simple-projects" },
            { label: "View Project", url: "https://craftycodeverse.blogspot.com/2024/06/password-validator.html" }
        ]
    },
    // Add more projects here
];

// Render projects
function renderProjects() {
    const slider = document.getElementById("slider");
    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                ${project.links.map(link => `<a href="${link.url}" target="_blank">${link.label}</a>`).join("")}
            </div>
        `;
        slider.appendChild(projectCard);
    });
}

// Slider navigation
let currentIndex = 0;

function moveSlide(direction) {
    const totalProjects = projects.length;
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalProjects - 1;
    } else if (currentIndex >= totalProjects) {
        currentIndex = 0;
    }

    const slider = document.getElementById("slider");
    const offset = -currentIndex * 320; // 320px is the width of the card
    slider.style.transform = `translateX(${offset}px)`;
}

// Initialize
renderProjects();
