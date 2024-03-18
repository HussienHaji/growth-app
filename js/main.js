// faq accordion
document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".faq-content");

  faqContainer.addEventListener("click", (e) => {
    const groupHeader = e.target.closest(".faq-group-header");
    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector(".faq-group-body");
    const icon = group.querySelector("i");

    // toggle icon
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    // toggle body
    groupBody.classList.toggle("open");

    // close others open FAQ bodes
    const otherGroups = faqContainer.querySelectorAll(".faq-group");

    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector(".faq-group-body");
        const otherIcon = otherGroup.querySelector(".faq-group-header i");

        otherGroupBody.classList.remove("open");
        otherIcon.classList.remove("fa-minus");
        otherIcon.classList.add("fa-plus");
      }
    });
  });
});

// mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburgerBtn.addEventListener("click", () => mobileMenu.classList.toggle("active"));
});
