export default () => {
  document.querySelectorAll('svg use').forEach(el => {
    const href = el.getAttribute('href') || el.getAttribute('xlink:href');
    if (href) {
      el.setAttribute('href', href);
    }
  });
}
