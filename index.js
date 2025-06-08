document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  toggleButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
  });
});

document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.body.classList.toggle("menu-open");
});
