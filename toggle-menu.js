const menuToggle = document.getElementById('menu-toggle');
const menuList = document.querySelector('.menu-list');
const dropdownToggles = document.querySelectorAll('.dropdown-parent > a, .has-submenu > a');

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
  menuList.classList.toggle('active');
});

// Accordion dropdowns for mobile
dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    if (window.innerWidth < 768) { // Only for mobile
      const nextDropdown = toggle.nextElementSibling;

      if (nextDropdown && (nextDropdown.classList.contains('dropdown') || nextDropdown.classList.contains('submenu'))) {
        // If dropdown is closed, open it and prevent navigation
        if (!nextDropdown.classList.contains('open')) {
          e.preventDefault();
          nextDropdown.classList.add('open');
        } 
        // If already open, allow link navigation (no preventDefault)
      }
    }
  });
});
