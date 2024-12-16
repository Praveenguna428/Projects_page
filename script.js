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
    {
        title: "Age Calculator",
        description: "The Age Calculator Project is a simple yet efficient tool that calculates a person's exact age based on their date of birth.",
        image: "https://store-images.s-microsoft.com/image/apps.6149.9007199266602325.15b23e79-d07a-4ca8-8a2a-eb0cdb9bae7b.d634df16-3002-4d42-9d39-c9d018f1a66c",
        links: [
            { label: "View Code", url: "https://github.com/Praveenguna428/html-simple-projects" },
            { label: "View Project", url: "https://praveenguna428.github.io/age-calculator/" }
        ]
    },
    {
        title: "Calculator",
        description: "The Calculator Project is a versatile tool that performs basic arithmetic operations such as addition, subtraction, multiplication, and division.",
        image: "https://danishmushtaq.netlify.app/Project%20Images/calculator.webp",
        links: [
            { label: "View Code", url: "https://github.com/Praveenguna428/html-simple-projects" },
            { label: "View Project", url: "https://craftycodeverse.blogspot.com/2024/06/calc.html" }
        ]
    },
    {
        title: "Calendar Display",
        description: "The Calendar Display Project is a dynamic web application that shows a monthly calendar for any given year and month. Users can easily navigate between months and view the corresponding days.",
        image: "https://www.redpixels.in/wp-content/uploads/2024/05/Redpixel_desk_calendar_01.jpg",
        links: [
            { label: "View Code", url: "https://github.com/Praveenguna428/html-simple-projects" },
            { label: "View Project", url: "https://praveenguna428.github.io/calender-display/" }
        ]
    }
]; // <- Properly closed array

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
 document.addEventListener("DOMContentLoaded", renderProjects);
