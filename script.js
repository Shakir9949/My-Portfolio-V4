// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Project data
    const projects = [
        {
            title: "JavaScript Calculator",
            description: "A simple calculator built with JavaScript for basic arithmetic operations.",
        },
        {
            title: "Weather App",
            description: "An app that fetches weather data from an API and displays the forecast for any city.",
        },
        {
            title: "To-Do List",
            description: "A fully interactive to-do list with drag-and-drop functionality and localStorage support.",
        },
    ];

    const gallery = document.getElementById("project-gallery");

    // Create and append each project
    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.className = "project-card";

        const title = document.createElement("h3");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        projectDiv.appendChild(title);
        projectDiv.appendChild(description);
        gallery.appendChild(projectDiv);
    });

    // Contact form handling
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", event => {
        event.preventDefault();

        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();

        if (name && email && message) {
            alert("Thank you for your message!");
            contactForm.reset(); // clear form
        } else {
            alert("Please fill in all fields.");
        }
    });
});
