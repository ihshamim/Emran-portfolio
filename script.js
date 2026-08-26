/* ---------- mobile menu ---------- */
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

/* ---------- theme toggle ---------- */
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");
  const icon = themeToggle.querySelector("i");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
});

/* ---------- typed role text ---------- */
new Typed(".typed", {
  strings: ["Web Developer", "[Your other role]", "[Add a title]"],
  typeSpeed: 65,
  backSpeed: 40,
  backDelay: 1800,
  loop: true,
});

/* ---------- animated stat counters ---------- */
function animateCount(el, target, duration = 1200) {
  let start = 0;
  const step = Math.max(target / (duration / 16), 1);
  const tick = () => {
    start += step;
    if (start >= target) {
      el.textContent = String(target).padStart(2, "0");
      return;
    }
    el.textContent = String(Math.floor(start)).padStart(2, "0");
    requestAnimationFrame(tick);
  };
  tick();
}
const statProjects = document.getElementById("statProjects");
const statYears = document.getElementById("statYears");
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCount(statProjects, 12);
      animateCount(statYears, 2);
      statObserver.disconnect();
    }
  });
});
statObserver.observe(document.querySelector(".hero-visual"));

/* ---------- scroll reveal ---------- */
const sr = ScrollReveal({ distance: "40px", duration: 900, reset: false, easing: "ease" });
sr.reveal(".hero-copy", { origin: "left", delay: 100 });
sr.reveal(".hero-visual", { origin: "right", delay: 200 });
sr.reveal(".about-photo", { origin: "left" });
sr.reveal(".about-copy", { origin: "right" });
sr.reveal(".skill-group", { interval: 120 });
sr.reveal(".timeline-item", { interval: 150, origin: "left" });
sr.reveal(".project-card", { interval: 120, origin: "bottom" });
sr.reveal(".testimonial-card", { interval: 150 });
sr.reveal(".contact-info-panel", { origin: "left" });
sr.reveal(".contact-form", { origin: "right" });

/* ---------- active nav link on scroll ---------- */
const sections = document.querySelectorAll("main section[id]");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  sections.forEach((sec) => {
    const top = sec.offsetTop - 120;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (!link) return;
    if (scrollY > top && scrollY <= top + height) {
      document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active-link"));
      link.classList.add("active-link");
    }
  });
});

/* ---------- footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
