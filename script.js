document.addEventListener("DOMContentLoaded", function () {
    // NAVBAR COLLAPSE ON LINK CLICK
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.getElementById("navbarNavDropdown");
  
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        if (navbarCollapse.classList.contains("show")) {
          bsCollapse.hide();
        }
      });
    });

    // ACTIVE CLASS ON SCROLL
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 70; // adjust for fixed navbar height
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    // FORM SUBMISSION HANDLER
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            const formData = {
                name: this.name.value,
                email: this.email.value,
                message: this.message.value
            };

            fetch("https://formspree.io/f/xpwrwozo", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })
            .then(response => {
                if (response.ok) {
                    alert("✅ Form submitted successfully!");
                    this.reset();
                } else {
                    alert("❌ Submission failed. Please try again.");
                }
            })
            .catch(error => {
                alert("❌ Error: " + error.message);
            });
        });
    }
});
