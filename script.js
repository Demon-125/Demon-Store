// ============================================
//  DEMON STORE – script.js
// ============================================

// ---- FF PRICE LIST DATA ----
const WA = '+6283835989728';
const ffData = {
  diamond: [
    ['5',     'Rp 1.000'],  ['10',   'Rp 2.000'],  ['12',   'Rp 3.000'],
    ['15',    'Rp 4.000'],  ['20',   'Rp 5.000'],  ['25',   'Rp 6.000'],
    ['30',    'Rp 6.000'],  ['40',   'Rp 7.000'],  ['50',   'Rp 8.000'],
    ['55',    'Rp 9.000'],  ['70',   'Rp 10.000'], ['75',   'Rp 12.000'],
    ['80',    'Rp 14.000'], ['100',  'Rp 14.500'], ['120',  'Rp 17.000'],
    ['130',   'Rp 18.500'], ['140',  'Rp 20.000'], ['145',  'Rp 20.500'],
    ['150',   'Rp 22.000'], ['190',  'Rp 26.000'], ['200',  'Rp 27.500'],
    ['210',   'Rp 30.000'], ['250',  'Rp 36.000'], ['260',  'Rp 37.000'],
    ['280',   'Rp 40.000'], ['300',  'Rp 45.000'], ['355',  'Rp 48.000'],
    ['420',   'Rp 62.000'], ['500',  'Rp 67.000'], ['510',  'Rp 70.000'],
    ['565',   'Rp 72.000'], ['635',  'Rp 81.000'], ['720',  'Rp 90.000'],
    ['800',   'Rp 105.000'],['860',  'Rp 110.000'],['930',  'Rp 117.000'],
    ['1.000', 'Rp 130.000'],['1.050','Rp 137.000'],['1.075','Rp 140.000'],
    ['1.080', 'Rp 145.000'],['1.450','Rp 190.000'],['2.140','Rp 280.000'],
    ['2.200', 'Rp 315.000'],['3.640','Rp 460.000'],['7.290','Rp 920.000'],
    ['36.500','Rp 4.600.000'],['73.100','Rp 9.000.000']
  ],
  other: [
    ['🎖️ Membership Mingguan', 'Rp 29.000',  'MM%20Free%20Fire'],
    ['🎖️ Membership Bulanan',   'Rp 85.000',  'MB%20Free%20Fire'],
    ['⬆️ Level Up Pas Lvl 6',  'Rp 6.000',   'Level%20Up%20Pas%20Lvl%206%20Free%20Fire'],
    ['⬆️ Level Up Pas Lvl 10', 'Rp 10.000',  'Level%20Up%20Pas%20Lvl%2010%20Free%20Fire'],
    ['⬆️ Level Up Pas Lvl 15', 'Rp 10.000',  'Level%20Up%20Pas%20Lvl%2015%20Free%20Fire'],
    ['⬆️ Level Up Pas Lvl 20', 'Rp 10.000',  'Level%20Up%20Pas%20Lvl%2020%20Free%20Fire'],
    ['⬆️ Level Up Pas Lvl 25', 'Rp 10.000',  'Level%20Up%20Pas%20Lvl%2025%20Free%20Fire'],
    ['⬆️ Level Up Pas Lvl 30', 'Rp 15.000',  'Level%20Up%20Pas%20Lvl%2030%20Free%20Fire'],
    ['🃏 BP Card',              'Rp 43.000',  'BP%20Card%20Free%20Fire']
  ]
};

const mlData = {
  diamond: [
    ['5', 'Rp 2.000'], ['12', 'Rp 4.000'], ['19', 'Rp 6.500'],
    ['28', 'Rp 8.500'], ['44', 'Rp 13.500'], ['50', 'Rp 15.000'],
    ['59', 'Rp 17.000'], ['66', 'Rp 20.000'], ['74', 'Rp 23.000'],
    ['83', 'Rp 25.000'], ['85', 'Rp 25.000'], ['100', 'Rp 28.000'],
    ['112', 'Rp 32.000'], ['144', 'Rp 40.000'], ['170', 'Rp 47.000'],
    ['185', 'Rp 52.000'], ['222', 'Rp 60.000'], ['240', 'Rp 65.000'],
    ['257', 'Rp 70.000'], ['278', 'Rp 75.500'], ['284', 'Rp 77.000'],
    ['296', 'Rp 82.000'], ['301', 'Rp 84.000'], ['345', 'Rp 95.000'],
    ['370', 'Rp 105.000'], ['384', 'Rp 108.000'], ['408', 'Rp 115.000'],
    ['429', 'Rp 120.000'], ['512', 'Rp 145.000'], ['568', 'Rp 155.000'],
    ['601', 'Rp 165.000'], ['642', 'Rp 175.000'], ['706', 'Rp 185.000'],
    ['717', 'Rp 187.000'], ['750', 'Rp 210.000'], ['875', 'Rp 225.000'],
    ['965', 'Rp 250.000'], ['1139', 'Rp 300.000']
  ],
  other: [
    ['Weekly Diamond Pass 1x', 'Rp 30.000', 'Weekly%20Diamond%20Pass%201x%20Mobile%20Legends'],
    ['Weekly Diamond Pass 2x', 'Rp 60.000', 'Weekly%20Diamond%20Pass%202x%20Mobile%20Legends'],
    ['Starlight Member', 'Rp 85.000', 'Starlight%20Member%20Mobile%20Legends'],
    ['Starlight Member Plus', 'Rp 197.000', 'Starlight%20Member%20Plus%20Mobile%20Legends']
  ]
};

const jokiData = {
  bintang: [
    ['Grandmaster', 'Rp 2.000', 'Joki%20ML%20Grandmaster%20Per%20Bintang'],
    ['Epic', 'Rp 4.000', 'Joki%20ML%20Epic%20Per%20Bintang'],
    ['Legend', 'Rp 5.000', 'Joki%20ML%20Legend%20Per%20Bintang'],
    ['Mythic', 'Rp 7.000', 'Joki%20ML%20Mythic%20Per%20Bintang'],
    ['Mythic Honor', 'Rp 10.000', 'Joki%20ML%20Mythic%20Honor%20Per%20Bintang'],
    ['Mythic Glory', 'Rp 15.000', 'Joki%20ML%20Mythic%20Glory%20Per%20Bintang']
  ],
  paket: [
    ['Warior 1-3 ➔ Elite', 'Rp 5.000', 'Paket%20Joki%20ML%20Warior%20ke%20Elite'],
    ['Elite 1-4 ➔ Master', 'Rp 10.000', 'Paket%20Joki%20ML%20Elite%20ke%20Master'],
    ['Master 1-4 ➔ Grandmaster', 'Rp 15.000', 'Paket%20Joki%20ML%20Master%20ke%20Grandmaster'],
    ['Grandmaster 1-5 ➔ Epic', 'Rp 30.000', 'Paket%20Joki%20ML%20Grandmaster%20ke%20Epic'],
    ['Epic 1-5 ➔ Legend', 'Rp 50.000', 'Paket%20Joki%20ML%20Epic%20ke%20Legend'],
    ['Legend 1-5 ➔ Grading', 'Rp 100.000', 'Paket%20Joki%20ML%20Legend%20ke%20Grading'],
    ['Grading 1-10 ➔ Mythic', 'Rp 50.000', 'Paket%20Joki%20ML%20Grading%20ke%20Mythic']
  ]
};

function buildFFPricelist() {
  const body = document.getElementById('ff-pricelist-body');
  if (!body) return;
  const waBase = `https://wa.me/${WA.replace('+','')}?text=Halo%20Demon%20Store%2C%20saya%20mau%20Top%20Up%20`;
  const wasvg = `<img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" class="pl-wa" alt="WA"/>`;

  // Diamond section
  let diamondHTML = `<div class="pl-group-title">💎 Diamond FF</div><div class="pl-items">`;
  ffData.diamond.forEach(([d, p]) => {
    const dRaw = d.replace(/\./g, '');
    const waUrl = `${waBase}${dRaw}%20Diamond%20Free%20Fire%20-%20${encodeURIComponent(p)}.%20Tolong%20Kirim%20Format%20Isi%20Data%20nya`;
    diamondHTML += `<a class="pl-item" href="${waUrl}" target="_blank" rel="noopener">
      <span class="pl-label">${d} 💎</span>
      <span class="pl-price">${p}</span>
      ${wasvg}
    </a>`;
  });
  diamondHTML += `</div>`;

  // Other section
  let otherHTML = `<div class="pl-group-title">🎖️ Lainnya</div><div class="pl-items pl-items-other">`;
  ffData.other.forEach(([name, p, slug]) => {
    const waUrl = `https://wa.me/${WA.replace('+','')}?text=Halo%20Demon%20Store%2C%20saya%20mau%20${slug}%20-%20${encodeURIComponent(p)}.%20Tolong%20Kirim%20Format%20Isi%20Data%20nya`;
    otherHTML += `<a class="pl-item pl-item-wide" href="${waUrl}" target="_blank" rel="noopener">
      <span class="pl-label">${name}</span>
      <span class="pl-price">${p}</span>
      ${wasvg}
    </a>`;
  });
  otherHTML += `</div>`;

  body.innerHTML = diamondHTML + otherHTML;
}
buildFFPricelist();

function buildMLPricelist() {
  const body = document.getElementById('ml-pricelist-body');
  if (!body) return;
  const waBase = `https://wa.me/${WA.replace('+','')}?text=Halo%20Demon%20Store%2C%20saya%20mau%20Top%20Up%20`;
  const wasvg = `<img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" class="pl-wa" alt="WA"/>`;

  // Diamond section
  let diamondHTML = `<div class="pl-group-title">💎 Diamond ML</div><div class="pl-items">`;
  mlData.diamond.forEach(([d, p]) => {
    const waUrl = `${waBase}${d}%20Diamond%20Mobile%20Legends%20-%20${encodeURIComponent(p)}.%20Tolong%20Kirim%20Format%20Isi%20Data%20nya`;
    diamondHTML += `<a class="pl-item" href="${waUrl}" target="_blank" rel="noopener">
      <span class="pl-label">${d} 💎</span>
      <span class="pl-price">${p}</span>
      ${wasvg}
    </a>`;
  });
  diamondHTML += `</div>`;

  // Other section
  let otherHTML = `<div class="pl-group-title">🎖️ Lainnya</div><div class="pl-items pl-items-other">`;
  mlData.other.forEach(([name, p, slug]) => {
    const waUrl = `https://wa.me/${WA.replace('+','')}?text=Halo%20Demon%20Store%2C%20saya%20mau%20${slug}%20-%20${encodeURIComponent(p)}.%20Tolong%20Kirim%20Format%20Isi%20Data%20nya`;
    otherHTML += `<a class="pl-item pl-item-wide" href="${waUrl}" target="_blank" rel="noopener">
      <span class="pl-label">${name}</span>
      <span class="pl-price">${p}</span>
      ${wasvg}
    </a>`;
  });
  otherHTML += `</div>`;

  body.innerHTML = diamondHTML + otherHTML;
}
buildMLPricelist();

function buildJokiPricelist() {
  const body = document.getElementById('joki-pricelist-body');
  if (!body) return;
  const wasvg = `<img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" class="pl-wa" alt="WA"/>`;

  // Bintang section
  let bintangHTML = `<div class="pl-group-title">📌 Paket Per Bintang</div><div class="pl-items pl-items-2col">`;
  jokiData.bintang.forEach(([name, p, slug]) => {
    const waUrl = `https://wa.me/${WA.replace('+','')}?text=Halo%20Demon%20Store%2C%20saya%20mau%20${slug}%20-%20${encodeURIComponent(p)}.%20Tolong%20Kirim%20Format%20Isi%20Data%20nya`;
    bintangHTML += `<a class="pl-item pl-item-wide" href="${waUrl}" target="_blank" rel="noopener">
      <span class="pl-label">${name}</span>
      <span class="pl-price">${p}/⭐</span>
      ${wasvg}
    </a>`;
  });
  bintangHTML += `</div>`;

  // Paket Hemat section
  let paketHTML = `<div class="pl-group-title">📌 Paket Hemat Per Tier</div><div class="pl-items pl-items-other">`;
  jokiData.paket.forEach(([name, p, slug]) => {
    const waUrl = `https://wa.me/${WA.replace('+','')}?text=Halo%20Demon%20Store%2C%20saya%20mau%20${slug}%20-%20${encodeURIComponent(p)}.%20Tolong%20Kirim%20Format%20Isi%20Data%20nya`;
    paketHTML += `<a class="pl-item pl-item-wide" href="${waUrl}" target="_blank" rel="noopener">
      <span class="pl-label">${name}</span>
      <span class="pl-price">${p}</span>
      ${wasvg}
    </a>`;
  });
  paketHTML += `</div>`;

  body.innerHTML = bintangHTML + paketHTML;
}
buildJokiPricelist();

// Fungsi tombol intro FF → scroll ke #products lalu aktifkan tab FF
function activateFFTab(e) {
  e.preventDefault();
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => document.getElementById('tab-ff').click(), 400);
}

// Fungsi tombol intro ML → scroll ke #products lalu aktifkan tab ML
function activateMLTab(e) {
  e.preventDefault();
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => document.getElementById('tab-ml').click(), 400);
}

// Fungsi tombol intro Joki → scroll ke #products lalu aktifkan tab Joki
function activateJokiTab(e) {
  e.preventDefault();
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => document.getElementById('tab-joki').click(), 400);
}


// ---- NAVBAR SCROLL ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ---- HAMBURGER MENU ----
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
const navOverlay = document.getElementById('navOverlay');
const closeMenuBtn = document.getElementById('closeMenu'); // Tombol X khusus mobile

function toggleMenu() {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
  navbar.classList.toggle('nav-open');
  if (navOverlay) navOverlay.classList.toggle('open');
}

function closeMenu() {
  hamburger.classList.remove('active');
  navLinks.classList.remove('open');
  navbar.classList.remove('nav-open');
  if (navOverlay) navOverlay.classList.remove('open');
}

hamburger.addEventListener('click', toggleMenu);
if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);
if (navOverlay) navOverlay.addEventListener('click', closeMenu);

// Close menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// ---- CATEGORY TABS / FILTER ----
const tabBtns     = document.querySelectorAll('.tab-btn');
const productCards = document.querySelectorAll('.product-card');

// Jalankan filter 'all' saat pertama load (hanya tampil yang populer)
function applyFilter(filter) {
  productCards.forEach(card => {
    const cat     = card.dataset.category;
    const popular = card.dataset.popular === 'true';
    const show    = filter === 'all' ? popular : (cat === filter);

    if (show) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

applyFilter('all'); // default: tampilkan hanya yang populer

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Active state
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.tab;

    productCards.forEach(card => {
      const cat      = card.dataset.category;
      const popular  = card.dataset.popular === 'true';

      let show = false;
      if (filter === 'all') {
        // Tab Semua: hanya tampilkan produk berlabel populer
        show = popular;
      } else {
        // Tab kategori: tampilkan semua produk dalam kategori itu
        show = (cat === filter);
      }

      if (show) {
        card.classList.remove('hidden');
        card.style.animation = 'none';
        void card.offsetHeight;
        card.style.animation = '';
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ---- SCROLL REVEAL ----
const revealEls = document.querySelectorAll(
  '.product-card, .verify-card, .contact-card, .contact-info-card, .warn-item'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
    } else {
      // Hapus class visible saat elemen keluar dari layar agar bisa muncul lagi
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => observer.observe(el));

// ---- ACTIVE NAV LINK ON SCROLL ----
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    if (window.scrollY >= top) current = sec.getAttribute('id');
  });
  navItems.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === `#${current}`) {
      a.classList.add('active');
    }
  });
});

// ---- SMOOTH FLOAT CARD TILT on Hero ----
const heroVisual = document.querySelector('.hero-visual');
if (heroVisual) {
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth  - 0.5) * 12;
    const y = (e.clientY / window.innerHeight - 0.5) * 12;
    heroVisual.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${-y}deg)`;
  });
  document.addEventListener('mouseleave', () => {
    heroVisual.style.transform = '';
  });
}

// ---- YEAR IN FOOTER ----
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
  footerYear.innerHTML = footerYear.innerHTML.replace('2025', new Date().getFullYear());
}
