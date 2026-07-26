// ============================================
//  DEMON STORE – detail.js
// ============================================

// State untuk carousel
let currentImageIndex = 0;
let currentAccount = null;
let touchStartX = 0;
let touchEndX = 0;

// Data struktur untuk semua akun STOK FF
const accountsData = {
  'FF-001': {
    id: 'FF-001',
    category: 'FREE FIRE',
    title: 'FF-001',
    sku: 'FF001-LVL71',
    status: 'SOLD OUT',
    price: 'Rp 550.000',
    priceRaw: 550000,
    images: ['FF-001/sampul.png', 'FF-001/profile1.jpeg', 'FF-001/profile2.jpeg', 'FF-001/profile3.jpeg', 'FF-001/profile4.jpeg', 'FF-001/profile5.jpeg', 'FF-001/profile6.jpeg', 'FF-001/profile7.jpeg'],
    specs: {
      level: '71',
      email: 'Terverifikasi',
      garansi: '15 Hari',
      condition: 'Siap Main'
    },
    description: 'Akun Free Fire premium dengan level 71 dan koleksi skin lengkap. Email sudah terverifikasi dan siap untuk dimainkan langsung. Akun ini cocok untuk pemain yang menginginkan akun berkualitas tinggi dengan berbagai pilihan senjata dan karakter eksklusif.',
    waPhone: '+6283835989728'
  },
  'FF-002': {
    id: 'FF-002',
    category: 'FREE FIRE',
    title: 'FF-002',
    sku: 'FF002-LVL70',
    status: 'SOLD OUT',
    price: 'Rp 650.000',
    priceRaw: 650000,
    images: ['FF-002/sampul.png', 'FF-002/profile1.jpeg', 'FF-002/profile2.jpeg', 'FF-002/profile3.jpeg', 'FF-002/profile4.jpeg', 'FF-002/profile5.jpeg', 'FF-002/profile6.jpeg', 'FF-002/profile7.jpeg'],
    specs: {
      level: '70',
      email: 'Terverifikasi',
      skins: '35+ Skin Pilihan',
      garansi: '15 Hari',
      condition: 'Siap Main'
    },
    description: 'Akun Free Fire level 70 dengan koleksi skin pilihan yang menarik. Status email sudah terverifikasi dan dapat digunakan langsung setelah pembelian. Akun ini adalah pilihan terjangkau untuk pemain yang ingin upgrade dengan koleksi skin yang cukup lengkap.',
    waPhone: '+6283835989728'
  },
  'FF-003': {
    id: 'FF-003',
    category: 'FREE FIRE',
    title: 'FF-003',
    sku: 'FF003-LVL77',
    status: 'SOLD OUT',
    price: 'Rp 2.500.000',
    priceRaw: 2500000,
    images: ['FF-003/sampul.png', 'FF-003/profile1.jpeg', 'FF-003/profile2.jpeg', 'FF-003/profile3.jpeg', 'FF-003/profile4.jpeg', 'FF-003/profile5.jpeg', 'FF-003/profile6.jpeg', 'FF-003/profile7.jpeg'],
    specs: {
      level: '77',
      email: 'Terverifikasi',
      skins: '60+ Skin Eksklusif',
      garansi: '15 Hari',
      condition: 'Siap Main'
    },
    description: 'Akun Free Fire terbaik dengan level 77 dan koleksi skin eksklusif terlengkap. Email sudah fully verified dengan dukungan customer service 24/7. Akun ini adalah pilihan premium untuk pemain yang menginginkan pengalaman bermain terbaik dengan berbagai pilihan eksklusif.',
    waPhone: '+6283835989728'
  },
  'FF-004': {
    id: 'FF-004',
    category: 'FREE FIRE',
    title: 'FF-004',
    sku: 'FF004-LVL54',
    status: 'SOLD OUT',
    price: 'Rp 250.000',
    priceRaw: 250000,
    images: ['FF-004/sampul.png', 'FF-004/profile1.jpeg', 'FF-004/profile2.jpeg', 'FF-004/profile3.jpeg', 'FF-004/profile4.jpeg', 'FF-004/profile5.jpeg', 'FF-004/profile6.jpeg', 'FF-004/profile7.jpeg'],
    specs: {
      level: '54',
      email: 'Terverifikasi',
      skins: '35+ Skin Pilihan',
      garansi: '15 Hari',
      condition: 'Siap Main'
    },
    description: 'Akun Free Fire terbaik dengan level 54 dan koleksi skin pilihan. Email sudah fully verified dengan dukungan customer service 24/7. Akun ini adalah pilihan terjangkau untuk pemain yang menginginkan pengalaman bermain yang menyenangkan dengan berbagai pilihan skin.',
    waPhone: '+6283835989728'
  },
  'FF-005': {
    id: 'FF-005',
    category: 'FREE FIRE',
    title: 'FF-005',
    sku: 'FF005-LVL54',
    status: 'SOLD OUT',
    price: 'Rp 200.000',
    priceRaw: 200000,
    images: ['FF-005/sampul.png', 'FF-005/profile1.jpeg', 'FF-005/profile2.jpeg', 'FF-005/profile3.jpeg', 'FF-005/profile4.jpeg', 'FF-005/profile5.jpeg', 'FF-005/profile6.jpeg', 'FF-005/profile7.jpeg'],
    specs: {
      level: '54',
      email: 'Terverifikasi',
      skins: '35+ Skin Pilihan',
      garansi: '15 Hari',
      condition: 'Siap Main'
    },
    description: 'Akun Free Fire terbaik dengan level 54 dan koleksi skin pilihan. Email sudah fully verified dengan dukungan customer service 24/7. Akun ini adalah pilihan terjangkau untuk pemain yang menginginkan pengalaman bermain yang menyenangkan dengan berbagai pilihan skin.',
    waPhone: '+6283835989728'
  },
  'FF-006': {
    id: 'FF-006',
    category: 'FREE FIRE',
    title: 'FF-006',
    sku: 'FF006-LVL65',
    status: 'SOLD  OUT',
    price: 'Rp 250.000',
    priceRaw: 250000,
    images: ['FF-006/sampul.png', 'FF-006/profile1.jpeg', 'FF-006/profile2.jpeg', 'FF-006/profile3.jpeg', 'FF-006/profile4.jpeg', 'FF-006/profile5.jpeg', 'FF-006/profile6.jpeg', 'FF-006/profile7.jpeg'],
    specs: {
      level: '65',
      email: 'Terverifikasi',
      skins: '35+ Skin Pilihan',
      garansi: '15 Hari',
      condition: 'Siap Main'
    },
    description: 'Akun Free Fire terbaik dengan level 65 dan koleksi skin pilihan. Email sudah fully verified dengan dukungan customer service 24/7. Akun ini adalah pilihan terjangkau untuk pemain yang menginginkan pengalaman bermain yang menyenangkan dengan berbagai pilihan skin.',
    waPhone: '+6283835989728'
  },
  'FF-007': {
    id: 'FF-007',
    category: 'FREE FIRE',
    title: 'FF-007',
    sku: 'FF007-LVL62',
    status: 'SOLD OUT',
    price: 'Rp 70.000',
    priceRaw: 70000,
    images: ['FF-007/sampul.png', 'FF-007/profile1.jpeg', 'FF-007/profile2.jpeg', 'FF-007/profile3.jpeg', 'FF-007/profile4.jpeg', 'FF-007/profile5.jpeg', 'FF-007/profile6.jpeg', 'FF-007/profile7.jpeg'],
    specs: {
      level: '62',
      email: 'Terverifikasi',
      skins: '35+ Skin Pilihan',
      garansi: '15 Hari',
      condition: 'Siap Main'
    },
    description: 'Akun Free Fire terbaik dengan level 62 dan koleksi skin pilihan. Email sudah fully verified dengan dukungan customer service 24/7. Akun ini adalah pilihan terjangkau untuk pemain yang menginginkan pengalaman bermain yang menyenangkan dengan berbagai pilihan skin.',
    waPhone: '+6283835989728'
  },
  'FF-008': {
    id: 'FF-008',
    category: 'FREE FIRE',
    title: 'FF-008',
    sku: 'FF008-LVL64',
    status: 'SOLD OUT',
    price: 'Rp 150.000',
    priceRaw: 150000,
    images: ['FF-008/sampul.png', 'FF-008/profile1.jpeg', 'FF-008/profile2.jpeg', 'FF-008/profile3.jpeg', 'FF-008/profile4.jpeg', 'FF-008/profile5.jpeg'],
    specs: {
      level: '64',
      email: 'Terverifikasi',
      skins: '35+ Skin Pilihan',
      garansi: '15 Hari',
      condition: 'Siap Main'
    },
    description: 'Akun Free Fire terbaik dengan level 64 dan koleksi skin pilihan. Email sudah fully verified dengan dukungan customer service 24/7. Akun ini adalah pilihan terjangkau untuk pemain yang menginginkan pengalaman bermain yang menyenangkan dengan berbagai pilihan skin.',
    waPhone: '+6283835989728'
  },
   'FF-009': {
    id: 'FF-009',
    category: 'FREE FIRE',
    title: 'FF-009',
    sku: 'FF009-LVL59',
    status: 'TERSEDIA',
    price: 'Rp 70.000',
    priceRaw: 70000,
    images: ['FF-009/sampul.png', 'FF-009/profile1.jpeg', 'FF-009/profile2.jpeg', 'FF-009/profile3.jpeg', 'FF-009/profile4.jpeg', 'FF-009/profile5.jpeg', 'FF-009/profile6.jpeg'],
    specs: {
      level: '59',
      email: 'Terverifikasi',
      skins: '35+ Skin Pilihan',
      garansi: '15 Hari',
      condition: 'Siap Main'
    },
    description: 'Akun Free Fire terbaik dengan level 59 dan koleksi skin pilihan. Email sudah fully verified dengan dukungan customer service 24/7. Akun ini adalah pilihan terjangkau untuk pemain yang menginginkan pengalaman bermain yang menyenangkan dengan berbagai pilihan skin.',
    waPhone: '+6283835989728'
  },
   'FF-010': {
    id: 'FF-010',
    category: 'FREE FIRE',
    title: 'FF-010',
    sku: 'FF010-LVL69',
    status: 'SOLD OUT',
    price: 'Rp 650.000',
    priceRaw: 650000,
    images: ['FF-010/sampul.png', 'FF-010/profile1.jpeg', 'FF-010/profile2.jpeg', 'FF-010/profile3.jpeg', 'FF-010/profile4.jpeg', 'FF-010/profile5.jpeg', 'FF-010/profile6.jpeg', 'FF-010/profile7.jpeg'],
    specs: {
      level: '69',
      email: 'Terverifikasi',
      skins: '35+ Skin Pilihan',
      garansi: '15 Hari',
      condition: 'Siap Main'
    },
    description: 'Akun Free Fire terbaik dengan level 69 dan koleksi skin pilihan. Email sudah fully verified dengan dukungan customer service 24/7. Akun ini adalah pilihan terjangkau untuk pemain yang menginginkan pengalaman bermain yang menyenangkan dengan berbagai pilihan skin.',
    waPhone: '+6283835989728'
  },
  'FF-011': {
    id: 'FF-011',
    category: 'FREE FIRE',
    title: 'FF-011',
    sku: 'FF011-LVL72',
    status: 'TERSEDIA',
    price: 'Rp 250.000',
    priceRaw: 250000,
    images: ['FF-011/sampul.png', 'FF-011/profile1.jpeg', 'FF-011/profile2.jpeg', 'FF-011/profile3.jpeg', 'FF-011/profile4.jpeg', 'FF-011/profile5.jpeg', 'FF-011/profile6.jpeg'],
    specs: {
      level: '72',
      email: 'Terverifikasi',
      skins: '35+ Skin Pilihan',
      garansi: '15 Hari',
      condition: 'Siap Main'
    },
    description: 'Akun Free Fire terbaik dengan level 72 dan koleksi skin pilihan. Email sudah fully verified dengan dukungan customer service 24/7. Akun ini adalah pilihan terjangkau untuk pemain yang menginginkan pengalaman bermain yang menyenangkan dengan berbagai pilihan skin.',
    waPhone: '+6283835989728'
  }
};

// Get account ID dari URL parameter
function getAccountIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id') || 'FF-001';
}

// Load detail page dengan data akun
function loadAccountDetail() {
  const accountId = getAccountIdFromURL();
  const account = accountsData[accountId];

  if (!account) {
    console.error('Akun tidak ditemukan:', accountId);
    return;
  }

  currentAccount = account;
  currentImageIndex = 0;

  // Update breadcrumb
  document.getElementById('breadcrumb-title').textContent = account.id;

  // Update header
  document.getElementById('detailBadge').textContent = account.category;
  document.getElementById('detailTitle').textContent = account.title;
  document.getElementById('detailSKU').textContent = account.sku;
  document.getElementById('detailStatus').textContent = account.status;

  document.getElementById('detailSeller').textContent = 'Demon Store ⭐⭐⭐⭐⭐';

  // Update price
  document.getElementById('detailPrice').textContent = account.price;

  // Build carousel images
  const imagesContainer = document.getElementById('imagesContainer');
  imagesContainer.innerHTML = '';
  account.images.forEach((img, index) => {
    const imageDiv = document.createElement('div');
    imageDiv.className = 'detail-image-item' + (index === 0 ? ' active' : '');
    imageDiv.innerHTML = `<img src="${img}" alt="Image ${index + 1}" />`;
    imagesContainer.appendChild(imageDiv);
  });

  // Build dots
  const dotsContainer = document.getElementById('carouselDots');
  dotsContainer.innerHTML = '';
  account.images.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.className = 'detail-carousel-dot' + (index === 0 ? ' active' : '');
    dot.onclick = () => goToCarouselImage(index);
    dotsContainer.appendChild(dot);
  });

  // Update specs
  document.getElementById('specLevel').textContent = account.specs.level;
  document.getElementById('specEmail').textContent = account.specs.email;
  document.getElementById('specGaransi').textContent = account.specs.garansi;
  document.getElementById('specCondition').textContent = account.specs.condition;

  // Update description
  document.getElementById('detailDesc').textContent = account.description;

  // Update page title
  document.title = `${account.id} - ${account.category} - Demon Store`;

  // ---- CHECK SOLD OUT STATUS AND TOGGLE CLASSES ----
  const statusLower = account.status ? account.status.toLowerCase().trim() : '';
  const isAvailable = statusLower === 'tersedia' || statusLower === 'ready';

  const detailContainer = document.querySelector('.detail-container');
  const mainImageContainer = document.querySelector('.detail-main-image');

  if (mainImageContainer) {
    // Clear old ribbons first
    const oldRibbon = mainImageContainer.querySelector('.stok-ribbon, .sold-out-ribbon');
    if (oldRibbon) oldRibbon.remove();

    const ribbon = document.createElement('div');
    if (!isAvailable) {
      if (detailContainer) detailContainer.classList.add('sold-out');
      mainImageContainer.classList.add('sold-out');
      ribbon.className = 'stok-ribbon sold-out';
      ribbon.textContent = 'SOLD OUT';
    } else {
      if (detailContainer) detailContainer.classList.remove('sold-out');
      mainImageContainer.classList.remove('sold-out');
      ribbon.className = 'stok-ribbon ready';
      ribbon.textContent = 'READY';
    }
    mainImageContainer.appendChild(ribbon);
  }
}

// Carousel functions
function detailCarouselNext() {
  if (!currentAccount) return;
  currentImageIndex = (currentImageIndex + 1) % currentAccount.images.length;
  updateCarousel();
}

function detailCarouselPrev() {
  if (!currentAccount) return;
  currentImageIndex = (currentImageIndex - 1 + currentAccount.images.length) % currentAccount.images.length;
  updateCarousel();
}

function goToCarouselImage(index) {
  currentImageIndex = index;
  updateCarousel();
}

function updateCarousel() {
  // Update images
  const images = document.querySelectorAll('.detail-image-item');
  images.forEach((img, idx) => {
    img.classList.toggle('active', idx === currentImageIndex);
  });

  // Update dots
  const dots = document.querySelectorAll('.detail-carousel-dot');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentImageIndex);
  });
}

// Change main image ketika click thumbnail (deprecated - tidak digunakan)
function changeMainImage(thumbElement) {
  const thumbnails = document.querySelectorAll('.detail-thumb');
  thumbnails.forEach(t => t.classList.remove('active'));
  thumbElement.classList.add('active');

  const img = thumbElement.querySelector('img');
  document.getElementById('mainImage').src = img.src;
}

// Order via WhatsApp
function orderViaWhatsApp() {
  const accountId = getAccountIdFromURL();
  const account = accountsData[accountId];

  if (!account) return;

  const waPhone = account.waPhone.replace('+', '');
  const message = `Halo Demon Store, saya tertarik dengan akun ${account.id}. Masih ada stok? Detailnya:\n- SKU: ${account.sku}\n- Level: ${account.specs.level}\n- Harga: ${account.price}\n\nTolong kirim info lebih lengkap dan proses pembeliannya.`;

  const waUrl = `https://wa.me/${+6283835989728}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
}

// Navbar toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navOverlay = document.getElementById('navOverlay');
const closeMenuBtn = document.getElementById('closeMenu');

function toggleMenu() {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
  document.getElementById('navbar').classList.toggle('nav-open');
  if (navOverlay) navOverlay.classList.toggle('open');
}

function closeMenu() {
  hamburger.classList.remove('active');
  navLinks.classList.remove('open');
  document.getElementById('navbar').classList.remove('nav-open');
  if (navOverlay) navOverlay.classList.remove('open');
}

hamburger.addEventListener('click', toggleMenu);
if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);
if (navOverlay) navOverlay.addEventListener('click', closeMenu);

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// ---- TOUCH SWIPE SUPPORT UNTUK CAROUSEL ----
function initCarouselTouchSupport() {
  const carousel = document.getElementById('imagesContainer');
  if (!carousel) return;

  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, false);

  carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleCarouselSwipe();
  }, false);
}

function handleCarouselSwipe() {
  const swipeThreshold = 50; // minimum distance untuk detect swipe
  const diff = touchStartX - touchEndX;

  // Swipe ke kiri (next image)
  if (diff > swipeThreshold) {
    detailCarouselNext();
  }
  // Swipe ke kanan (prev image)
  else if (diff < -swipeThreshold) {
    detailCarouselPrev();
  }
}

// Load detail page on page load
window.addEventListener('DOMContentLoaded', () => {
  loadAccountDetail();
  initCarouselTouchSupport();
});
