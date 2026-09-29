const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const btn = (href, text, cls = '', extra = '') =>
  `<a class="btn ${cls}" href="${esc(href)}" ${extra}>${text}</a>`;

document.title = `${SITE.name} — ${SITE.role}`;
$('name').textContent = SITE.name;
$('role').textContent = SITE.role;
$('loc').textContent = SITE.location;

const initials = SITE.name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
const img = new Image();
img.alt = SITE.name;
img.onload = () => { $('avatar').innerHTML = ''; $('avatar').appendChild(img); };
$('avatar').textContent = initials;
img.src = SITE.photo;

$('aboutText').innerHTML = SITE.about.map(p => `<p>${esc(p)}</p>`).join('');

$('skillList').innerHTML = SITE.skills.map(g =>
  `<div class="group"><h3>${esc(g.group)}</h3><div class="chips">${
    g.items.map(i => `<span class="chip">${esc(i)}</span>`).join('')}</div></div>`).join('');

$('projectList').innerHTML = SITE.projects.map(p => `
  <article class="project">
    <h3>${esc(p.title)}</h3>
    <p>${esc(p.desc)}</p>
    <div class="tech">${p.tech.map(esc).join(', ')}</div>
    <div class="btns">
      ${p.live ? btn(p.live, 'Live demo', 'primary', 'target="_blank" rel="noopener"') : ''}
      ${p.code ? btn(p.code, 'Source code', '', 'target="_blank" rel="noopener"') : ''}
      ${p.file ? btn(p.file, 'Download app', '', 'download') : ''}
    </div>
  </article>`).join('');

$('mail').href = 'mailto:' + SITE.contact.email;
$('mail').textContent = SITE.contact.email;
$('links').innerHTML = SITE.contact.links.map(l => btn(l.url, esc(l.label), '', 'target="_blank" rel="noopener"')).join('');
$('foot').textContent = `© ${new Date().getFullYear()} ${SITE.name}`;

// highlight current section in nav
const navLinks = [...document.querySelectorAll('nav a')];
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) navLinks.forEach(a => a.classList.toggle('on', a.hash === '#' + e.target.id));
}), { rootMargin: '-40% 0px -55% 0px' });
document.querySelectorAll('main section').forEach(s => io.observe(s));
