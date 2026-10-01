const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ext = 'target="_blank" rel="noopener"';
const host = u => { try { return new URL(u).host; } catch { return ''; } };
const lnk = (href, text, extra = '') => `<a class="lnk" href="${esc(href)}" ${extra}>${text}</a>`;

document.title = `${SITE.name} — ${SITE.role}`;
$('brand').textContent = SITE.name;
$('year').textContent = new Date().getFullYear();
const parts = SITE.name.trim().split(/\s+/), last = parts.pop();
$('hello').innerHTML = `<span class="ln"><span>${esc(parts.join(' ') || last)}</span></span>` + (parts.length ? `<span class="ln"><span><em>${esc(last)}</em></span></span>` : '');
$('tagline').textContent = SITE.tagline;
$('cap').textContent = `${SITE.name} — ${SITE.location}`;
if (SITE.cv) { $('cv').href = SITE.cv; $('cv').hidden = false; }
$('meta').innerHTML = [['Role', SITE.role], ['Studying', `${SITE.education.degree}, ${SITE.education.school}`], ['Status', SITE.status || SITE.contact.email]]
  .map(([k, v]) => `<div><dt>${k}</dt><dd>${k === 'Status' && SITE.status ? '<i class="ping"></i>' : ''}${esc(v)}</dd></div>`).join('');

const initials = SITE.name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
const img = new Image(); img.alt = SITE.name;
img.onload = () => { $('avatar').textContent = ''; $('avatar').appendChild(img); };
$('avatar').textContent = initials; img.src = SITE.photo;

$('aboutText').innerHTML = SITE.about.map(p => `<p>${esc(p)}</p>`).join('')
  + `<div class="edu"><span>Education</span><strong>${esc(SITE.education.degree)}</strong><em>${esc(SITE.education.school)}</em></div>`;
$('svcList').innerHTML = SITE.services.map(s => `<article class="rv"><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></article>`).join('');
$('skillList').innerHTML = SITE.skills.map(g =>
  `<div class="group rv"><h3>${esc(g.group)}</h3><p>${g.items.map(x => `<span>${esc(x)}</span>`).join(' <i>/</i> ')}</p></div>`).join('');

const isPhone = p => /android|ios|mobile/i.test(p.kind || '');
const visual = p => {
  const shot = p.image ? `<img src="${esc(p.image)}" alt="${esc(p.title)} screenshot" loading="lazy">` : '';
  if (isPhone(p)) return `<div class="visual"><div class="phone">${shot || `<span class="ic">${esc(p.title[0])}</span><b>${esc(p.title)}</b><small>${esc(p.kind)}</small>`}</div></div>`;
  return `<div class="visual"><div class="browser"><i><u></u><u></u><u></u><em>${esc(host(p.live) || p.title)}</em></i><div class="pg ${p.image ? 'has' : ''}">${shot || `<b>${esc(p.title)}</b><s></s><s></s><s></s>`}</div></div></div>`;
};
$('projectList').innerHTML = SITE.projects.map((p, i) => `
  <article class="proj rv">
    ${visual(p)}
    <div>
      <span class="n">№ ${String(i + 1).padStart(2, '0')}</span>
      <h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p>
      ${(p.facts || []).length ? `<dl class="facts">${p.facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>` : ''}
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
document.querySelectorAll('.rv,.row').forEach(el => rv.observe(el));
const links = [...document.querySelectorAll('#nav a')];
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(a => a.classList.toggle('on', a.hash === '#' + e.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('section[id]').forEach(s => io.observe(s));

$('form').onsubmit = e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const body = `${f.get('msg')}\n\n— ${f.get('name')}`;
  location.href = `mailto:${SITE.contact.email}?subject=${encodeURIComponent('Project inquiry from ' + f.get('name'))}&body=${encodeURIComponent(body)}`;
};

// skills ticker
const tickSet = SITE.skills.flatMap(g => g.items).map(x => `<span>${esc(x)}</span><i></i>`).join('');
$('tick').innerHTML = (tickSet + tickSet).repeat(2);

$('procList').innerHTML = SITE.process.map((s, i) => `<article class="rv"><b>${i + 1}</b><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></article>`).join('');
document.querySelector('#projects h2').insertAdjacentHTML('beforeend', `<sup>${String(SITE.projects.length).padStart(2, '0')}</sup>`);
document.querySelectorAll('#procList .rv').forEach(el => rv.observe(el));

// hover interactions (skipped on touch screens and for reduced motion)
if (matchMedia('(hover:hover)').matches && !matchMedia('(prefers-reduced-motion:reduce)').matches) {
  document.querySelectorAll('.visual').forEach(v => {
    v.addEventListener('pointermove', e => {
      const r = v.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      v.style.setProperty('--ry', x * 14 + 'deg'); v.style.setProperty('--rx', -y * 14 + 'deg');
      v.style.setProperty('--mx', (x + .5) * 100 + '%'); v.style.setProperty('--my', (y + .5) * 100 + '%');
    });
    v.addEventListener('pointerleave', () => { v.style.setProperty('--rx', '0deg'); v.style.setProperty('--ry', '0deg'); });
  });
  document.querySelectorAll('.btn:not(.text)').forEach(b => {
    b.addEventListener('pointermove', e => {
      const r = b.getBoundingClientRect();
      b.style.translate = `${(e.clientX - r.left - r.width / 2) * .16}px ${(e.clientY - r.top - r.height / 2) * .3}px`;
    });
    b.addEventListener('pointerleave', () => b.style.translate = '');
  });
}

if (matchMedia('(hover:hover)').matches && !matchMedia('(prefers-reduced-motion:reduce)').matches) {
  const ph = document.querySelector('.photo'), st = $('stage');
  ph.addEventListener('pointermove', e => {
    const r = ph.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    st.style.setProperty('--ry', x * 16 + 'deg'); st.style.setProperty('--rx', -y * 16 + 'deg');
  });
  ph.addEventListener('pointerleave', () => { st.style.setProperty('--rx', '0deg'); st.style.setProperty('--ry', '0deg'); });
}

addEventListener('scroll', () => document.querySelector('.top').classList.toggle('scrolled', scrollY > 8), { passive: true });

// ---- live animations ----
const reduced = matchMedia('(prefers-reduced-motion:reduce)').matches;
const words = SITE.typed || ['websites', 'apps'], te = $('typed');
if (reduced) te.textContent = words[0];
else { let w = 0, c = 0, del = false;
  (function tick() {
    const word = words[w]; c += del ? -1 : 1; te.textContent = word.slice(0, c);
    let t = del ? 35 : 75;
    if (!del && c === word.length) { t = 1700; del = true; } else if (del && c === 0) { del = false; w = (w + 1) % words.length; t = 350; }
    setTimeout(tick, t);
  })(); }
const clk = () => { $('clock').textContent = 'Local time in Bangladesh: ' + new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Dhaka', hour: 'numeric', minute: '2-digit' }).format(new Date()); };
clk(); setInterval(clk, 30000);
if (matchMedia('(hover:hover)').matches && !reduced) {
  const g = $('glow'); let x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y;
  addEventListener('pointermove', e => { tx = e.clientX; ty = e.clientY; g.style.opacity = 1; }, { passive: true });
  document.addEventListener('pointerleave', () => g.style.opacity = 0);
  (function loop() { x += (tx - x) * .1; y += (ty - y) * .1; g.style.transform = `translate(${x}px,${y}px)`; requestAnimationFrame(loop); })();
}

// keep ticker speed constant (about 70px per second) however many skills there are
const setTickSpeed = () => { const t = $('tick'); t.style.animationDuration = Math.max(20, (t.scrollWidth / 2) / 70) + 's'; };
setTickSpeed(); document.fonts && document.fonts.ready.then(setTickSpeed);
