const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const btn = (href, text, cls = '', extra = '') => `<a class="btn ${cls}" href="${esc(href)}" ${extra}>${text}</a>`;
const ext = 'target="_blank" rel="noopener"';

document.title = `${SITE.name} — ${SITE.role}`;
$('brand').textContent = SITE.name;
$('role').textContent = `${SITE.role} · ${SITE.location}`;
$('hello').textContent = `Hi, I'm ${SITE.name}.`;
$('tagline').textContent = SITE.tagline;
if (SITE.cv) { $('cv').href = SITE.cv; $('cv').hidden = false; }

const initials = SITE.name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
const img = new Image(); img.alt = SITE.name;
img.onload = () => { $('avatar').textContent = ''; $('avatar').appendChild(img); };
$('avatar').textContent = initials; img.src = SITE.photo;

$('aboutText').innerHTML = SITE.about.map(p => `<p>${esc(p)}</p>`).join('');
$('skillList').innerHTML = SITE.skills.map(g =>
  `<div class="group"><h3>${esc(g.group)}</h3><div class="chips">${g.items.map(i => `<span class="chip">${esc(i)}</span>`).join('')}</div></div>`).join('');

$('projectList').innerHTML = SITE.projects.map(p => `
  <article class="card">
    <div class="thumb">${p.image
      ? `<img src="${esc(p.image)}" alt="${esc(p.title)} screenshot" loading="lazy">`
      : `<div class="mock"><i><b></b><b></b><b></b></i><span>${esc(p.title[0])}</span></div>`}</div>
    <div class="card-body">
      <h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p>
      ${(p.points||[]).length ? `<ul class="points">${p.points.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}
      <ul class="tech">${p.tech.map(t => `<li>${esc(t)}</li>`).join('')}</ul>
      <div class="btns">
        ${p.live ? btn(p.live, 'Live demo', 'primary sm', ext) : ''}
        ${p.code ? btn(p.code, 'Source code', 'sm', ext) : ''}
        ${p.file ? btn(p.file, 'Download app', 'sm', 'download') : ''}
      </div>
    </div>
  </article>`).join('');

$('mail').href = 'mailto:' + SITE.contact.email; $('mail').textContent = SITE.contact.email;
$('links').innerHTML = SITE.contact.links.map(l => btn(l.url, esc(l.label), '', ext)).join('');
$('foot').textContent = `© ${new Date().getFullYear()} ${SITE.name}`;
