const toggle = document.getElementById('darkModeToggle');

// Load saved mode from localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
  toggle.textContent = 'ON';
}

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    toggle.textContent = 'ON'; // Dark mode ON, show 'O'
    localStorage.setItem('darkMode', 'enabled');
  } else {
    toggle.textContent = 'OFF'; // Dark mode OFF, show 'I'
    localStorage.setItem('darkMode', 'disabled');
  }
});
