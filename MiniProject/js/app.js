'use strict';

const jadwalData = [
  { hari: 'Jumat', waktu: '15:00 WIB', topik: 'Fundamental English & Vocabulary' },
  { hari: 'Sabtu', waktu: '10:00 WIB', topik: 'Reading Code & Tech Documentation' },
  { hari: 'Minggu', waktu: '13:00 WIB', topik: 'Speaking, KTI Presentation & Review' }
];

const scheduleContainer = document.querySelector('#schedule-container');
const filterHari = document.querySelector('#filter-hari');
const statusJadwal = document.querySelector('#status-jadwal');

function renderJadwal(data) {
  scheduleContainer.replaceChildren();
  
  if (data.length === 0) {
    statusJadwal.textContent = 'Jadwal tidak tersedia untuk hari tersebut.';
    return;
  }
  
  statusJadwal.textContent = '';
  data.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${item.hari}, ${item.waktu}:</strong> ${item.topik}`;
    scheduleContainer.append(li);
  });
}

filterHari.addEventListener('change', () => {
  const pilihan = filterHari.value;
  const filtered = pilihan === 'Semua' ? jadwalData : jadwalData.filter(j => j.hari === pilihan);
  renderJadwal(filtered);
});

renderJadwal(jadwalData);

const btnMenu = document.querySelector('#mobile-menu-btn');
const mainNav = document.querySelector('#main-nav');

btnMenu.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  btnMenu.setAttribute('aria-expanded', String(isOpen));
});

const btnTema = document.querySelector('#toggle-tema');
btnTema.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

const faqButtons = document.querySelectorAll('.faq-btn');
faqButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    faqButtons.forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      b.nextElementSibling.classList.remove('is-active');
    });
    if (!isExpanded) {
      btn.setAttribute('aria-expanded', 'true');
      btn.nextElementSibling.classList.add('is-active');
    }
  });
});

const formDaftar = document.querySelector('#form-daftar');
const inputNama = document.querySelector('#nama');
const inputEmail = document.querySelector('#email');
const errorNama = document.querySelector('#error-nama');
const errorEmail = document.querySelector('#error-email');
const statusPendaftaran = document.querySelector('#status-pendaftaran');

formDaftar.addEventListener('submit', (e) => {
  e.preventDefault();
  let isValid = true;
  if (inputNama.value.trim().length < 3) {
    errorNama.textContent = 'Nama minimal 3 karakter.';
    inputNama.setAttribute('aria-invalid', 'true');
    isValid = false;
  } else {
    errorNama.textContent = '';
    inputNama.setAttribute('aria-invalid', 'false');
  }

  if (!inputEmail.value.includes('@')) {
    errorEmail.textContent = 'Masukkan email yang valid.';
    inputEmail.setAttribute('aria-invalid', 'true');
    isValid = false;
  } else {
    errorEmail.textContent = '';
    inputEmail.setAttribute('aria-invalid', 'false');
  }

  // Sukses Submit
  if (isValid) {
    statusPendaftaran.textContent = `Terima kasih ${inputNama.value}! Pendaftaran berhasil.`;
    formDaftar.reset();
  } else {
    statusPendaftaran.textContent = '';
  }
});

const btnTop = document.querySelector('#btn-back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnTop.style.display = 'block';
  } else {
    btnTop.style.display = 'none';
  }
});

btnTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});