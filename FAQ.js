const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const button = item.querySelector('.faq-question');
  
  button.addEventListener('click', () => {
    // Close all others
    faqItems.forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
        i.querySelector('.icon').textContent = '▼';
      }
    });

    // Toggle current
    item.classList.toggle('active');
    const icon = item.querySelector('.icon');
    icon.textContent = item.classList.contains('active') ? '▲' : '▼';
  });
});
