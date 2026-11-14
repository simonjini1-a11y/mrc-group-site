/* Click-to-load Google Maps: no request to Google until the visitor asks for the map. */
document.addEventListener('click', function (e) {
  var b = e.target.closest && e.target.closest('.map-ph');
  if (!b) return;
  var f = document.createElement('iframe');
  f.src = b.getAttribute('data-src');
  f.title = b.getAttribute('data-title');
  f.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
  f.setAttribute('allowfullscreen', '');
  b.parentNode.replaceChild(f, b);
  f.focus();
});
