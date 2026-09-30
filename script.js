const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ext = 'target="_blank" rel="noopener"';
const host = u => { try { return new URL(u).host; } catch { return ''; } };
const lnk = (href, text, extra = '') => `<a class="lnk" href="${esc(href)}" ${extra}>${text}</a>`;

document.title = `${SITE.name} — ${SITE.role}`;
$('brand').textContent = SITE.name;
$('year').textContent = new Date().getFullYear();
const parts = SITE.name.trim().split(/\s+/), last = parts.pop();
$('hello').innerHTML = `${esc(parts.join(' ') || last)}${parts.length ? `<br><em>${esc(last)}</em>` : ''}`;
$('tagline').textContent = SITE.tagline;
$('cap').textContent = `${SITE.name} — ${SITE.location}`;
if (SITE.cv) { $('cv').href = SITE.cv; $('cv').hidden = false; }
$('meta').innerHTML = [['Role', SITE.role], ['Studying', `${SITE.education.degree}, ${SITE.education.school}`], ['Status', SITE.status || SITE.contact.email]]
  .map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join('');

const initials = SITE.name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
const img = new Image(); img.alt = SITE.name;
img.onload = () => { $('avatar').textContent = ''; $('avatar').appendChild(img); };
$('avatar').textContent = initials; img.src = SITE.photo;

$('aboutText').innerHTML = SITE.about.map(p => `<p>${esc(p)}</p>`).join('');
$('svcList').innerHTML = SITE.services.map(s => `<article class="rv"><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></article>`).join('');
$('skillList').innerHTML = SITE.skills.map(g =>
  `<div class="group rv"><h3>${esc(g.group)}</h3><p>${g.items.map(esc).join('<i>/</i>')}</p></div>`).join('');

$('projectList').innerHTML = SITE.projects.map((p, i) => `
  <article class="proj rv">
    ${p.image ? `<div class="shot"><img src="${esc(p.image)}" alt="${esc(p.title)} screenshot" loading="lazy"></div>`
      : `<div class="panel"><small>${esc(host(p.live) || p.kind || 'Project')}</small><strong>${esc(p.title)}</strong></div>`}
    <div>
      <span class="n">№ ${String(i + 1).padStart(2, '0')}</span>
      <h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p>
      ${(p.points || []).length ? `<ul class="points">${p.points.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}
      <p class="tech">${p.tech.map(esc).join(' · ')}</p>
      <p class="hl">
        ${p.live ? lnk(p.live, 'Live site ↗', ext) : ''}
        ${p.code ? lnk(p.code, 'Source code ↗', ext) : ''}
        ${p.file ? lnk(p.file, `Download ${esc(p.fileLabel || 'app')} ↓`, 'download') : ''}
      </p>
      ${p.note ? `<p class="note">${esc(p.note)}</p>` : ''}
    </div>
  </article>`).join('');

$('mail').href = 'mailto:' + SITE.contact.email; $('mail').textContent = SITE.contact.email;
$('links').innerHTML = SITE.contact.links.map(l => lnk(l.url, `${esc(l.label)} ↗`, ext)).join('')
  + `<button class="lnk" id="copy" type="button">Copy email</button>`;
$('copy').onclick = async e => {
  try { await navigator.clipboard.writeText(SITE.contact.email); e.target.textContent = 'Copied ✓'; }
  catch { e.target.textContent = SITE.contact.email; }
  setTimeout(() => e.target.textContent = 'Copy email', 2000);
};
$('foot').textContent = `© ${new Date().getFullYear()} ${SITE.name}`;

$('theme').onclick = () => {
  const r = document.documentElement;
  const dark = r.dataset.theme ? r.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme:dark)').matches;
  r.dataset.theme = dark ? 'light' : 'dark';
  try { localStorage.setItem('theme', r.dataset.theme); } catch {}
};
$('menu').onclick = () => { const o = $('nav').classList.toggle('open'); $('menu').setAttribute('aria-expanded', o); };
$('nav').onclick = () => $('nav').classList.remove('open');
addEventListener('scroll', () => {
  const h = document.documentElement;
  $('progress').style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
}, { passive: true });
const rv = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); rv.unobserve(e.target); } }), { threshold: .1 });
document.querySelectorAll('.rv').forEach(el => rv.observe(el));
const links = [...document.querySelectorAll('#nav a')];
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(a => a.classList.toggle('on', a.hash === '#' + e.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('section[id]').forEach(s => io.observe(s));
