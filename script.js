document.querySelectorAll('.navbar-collapse .nav-link').forEach(function(navLink) {
        navLink.addEventListener('click', function() {
            var navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: true
                });
            }
        });
    });
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 70; // adjust for fixed navbar
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
document.getElementById("contactForm").addEventListener("submit", function(e) {
e.preventDefault(); // Prevent page from reloading

const formData = {
name: this.name.value,
email: this.email.value,
message: this.message.value
};

fetch("https://formspree.io/f/xpwrwozo", {
method: "POST",
headers: {
    "Content-Type": "application/json"
},
body: JSON.stringify(formData)
})
.then(response => {
if (response.ok) {
    alert("✅ Form submitted successfully!");
    this.reset(); // Optional: clear the form
} else {
    alert("❌ Submission failed. Please try again.");
}
})
.catch(error => {
alert("❌ Error: " + error.message);
});
});
function enableVerticalToHorizontalScroll(sliderId) {
  const slider = document.getElementById(sliderId);

  slider.addEventListener("wheel", function (e) {
    if (e.deltaY === 0) return; // ignore horizontal scroll
    e.preventDefault(); // stop vertical scroll

    // Scroll horizontally instead
    slider.scrollLeft += e.deltaY;
  }, { passive: false });
}

document.addEventListener("DOMContentLoaded", function () {
  enableVerticalToHorizontalScroll("servicesSlider");
  enableVerticalToHorizontalScroll("testimonialsSlider");
});