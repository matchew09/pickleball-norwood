// script.js

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
      answer.classList.toggle("show-answer");
    });
  });
});

// script.js

document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".toggle-button");

  toggleButtons.forEach((button) => {
    const matchDetails = button.nextElementSibling;

    button.addEventListener("click", () => {
      matchDetails.classList.toggle("show-details");
    });
  });
});
