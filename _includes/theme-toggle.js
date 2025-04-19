<script>
  const toggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Load saved theme
  const saved = localStorage.getItem('theme');
  if (saved) html.setAttribute('data-theme', saved);

  toggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', current);
    localStorage.setItem('theme', current);
  });
</script>
