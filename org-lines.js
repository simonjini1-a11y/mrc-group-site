/* Draws the dual reporting lines (COO and CTO) to the MRC department managers. */
(function () {
  var NS = 'http://www.w3.org/2000/svg';
  function line(svg, pts, color) {
    var p = document.createElementNS(NS, 'polyline');
    p.setAttribute('points', pts.map(function (q) { return q[0] + ',' + q[1]; }).join(' '));
    p.setAttribute('fill', 'none');
    p.setAttribute('stroke', color);
    p.setAttribute('stroke-width', '2');
    svg.appendChild(p);
  }
  function draw() {
    var org = document.querySelector('.org');
    if (!org) return;
    var old = org.querySelector('svg.org-lines');
    if (old) old.remove();
    var moshe = org.querySelector('[data-node="coo"] figure');
    var simon = org.querySelector('[data-node="cto"]');
    var row = org.querySelector('.mgr-row');
    if (!moshe || !simon || !row || window.innerWidth <= 1100) return;
    var o = org.getBoundingClientRect();
    var color = getComputedStyle(org).getPropertyValue('--ln').trim() || '#C3D0E0';
    var svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('class', 'org-lines');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('width', o.width);
    svg.setAttribute('height', o.height);
    var busY = row.getBoundingClientRect().top - o.top + 1;
    var items = row.children;
    var first = items[0].getBoundingClientRect(), last = items[items.length - 1].getBoundingClientRect();
    var busL = (first.left + first.width / 2) - o.left, busR = (last.left + last.width / 2) - o.left;
    // CTO: straight down from his card to the managers' line
    var sf = simon.querySelector('figure').getBoundingClientRect();
    var sc = simon.querySelector('.cap').getBoundingClientRect();
    var sx = sf.left + sf.width / 2 - o.left;
    line(svg, [[sx, sc.bottom - o.top + 6], [sx, busY]], color);
    // COO: from the side of his card, around the outside of the chart, into the managers' line
    var m = moshe.getBoundingClientRect();
    var right = (m.left + m.width / 2) > (o.left + o.width / 2);
    var my = m.top + m.height / 2 - o.top;
    var mx = right ? m.right - o.left : m.left - o.left;
    var out = right ? o.width + 22 : -22;
    var end = right ? busR : busL;
    line(svg, [[mx, my], [out, my], [out, busY], [end, busY]], color);
    org.appendChild(svg);
  }
  var t;
  function later() { clearTimeout(t); t = setTimeout(draw, 60); }
  window.addEventListener('resize', later);
  window.addEventListener('load', draw);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(draw);
  draw();
})();
