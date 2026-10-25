/* Catalog Library: filter by category and search text. */
(function () {
  var root = document.querySelector('.cl');
  if (!root) return;
  var q = root.querySelector('.cl-search'), chips = root.querySelectorAll('.cl-chip'),
      cards = root.querySelectorAll('.cl-card'), empty = root.querySelector('.cl-empty'), cat = 'all';
  function apply() {
    var t = (q.value || '').trim().toLowerCase(), n = 0;
    cards.forEach(function (c) {
      var ok = (cat === 'all' || c.dataset.cat === cat) && (!t || c.textContent.toLowerCase().indexOf(t) > -1);
      c.hidden = !ok; if (ok) n++;
    });
    empty.hidden = n > 0;
  }
  chips.forEach(function (b) {
    b.addEventListener('click', function () {
      chips.forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
      b.setAttribute('aria-pressed', 'true'); cat = b.dataset.cat; apply();
    });
  });
  q.addEventListener('input', apply);
})();
