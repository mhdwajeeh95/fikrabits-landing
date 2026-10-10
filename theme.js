/* Apply the saved/device theme before styles load, avoiding a theme flash. */
(function () {
  var theme;
  try { theme = localStorage.getItem('fikrabits-theme'); } catch (e) {}
  if (theme !== 'light' && theme !== 'dark') {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === 'light' ? '#faf9fd' : '#0b0d17';
  document.querySelector('link[rel="icon"]').href = 'assets/fikrabits-icon-' + (theme === 'light' ? 'deep-indigo' : 'soft-violet') + '.svg';
})();
