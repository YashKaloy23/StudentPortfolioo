
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});

document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});

document.getElementById("contactForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const status = document.getElementById("formStatus");

        if (!name || !email || !message) {
            status.textContent = "Please fill in all fields.";
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            status.textContent = "Please enter a valid email.";
            return;
        }

        status.textContent =
            "Thank you, " + name + "! Your message was validated.";

        this.reset();
    });
