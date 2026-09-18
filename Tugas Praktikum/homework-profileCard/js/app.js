'use strict';

let keterampilanData = [];

// Seleksi Elemen
const statusUI = document.querySelector('#profile-status');
const btnMuat = document.querySelector('#btn-muat');
const btnCobaLagi = document.querySelector('#btn-coba-lagi');
const profileContent = document.querySelector('#profile-content');

const namaProfil = document.querySelector('#nama-profil');
const prodiProfil = document.querySelector('#prodi-profil');
const deskripsiProfil = document.querySelector('#deskripsi-profil');
const daftarKeterampilan = document.querySelector('#daftar-keterampilan');

const btnDetail = document.querySelector('#btn-detail');
const detailProfil = document.querySelector('#detail-profil');

const formKeterampilan = document.querySelector('#form-keterampilan');
const inputKeterampilan = document.querySelector('#input-keterampilan');
const errorKeterampilan = document.querySelector('#error-keterampilan');

const btnTema = document.querySelector('#toggle-tema');

// 1. Fitur Toggle Tema
btnTema.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

// 2. Fitur Toggle Detail Profil (Accordion-style)
btnDetail.addEventListener('click', () => {
  const isExpanded = btnDetail.getAttribute('aria-expanded') === 'true';
  
  btnDetail.setAttribute('aria-expanded', String(!isExpanded));
  detailProfil.hidden = isExpanded;
  btnDetail.textContent = isExpanded ? 'Lihat Detail' : 'Tutup Detail';
});

// Helper Pengatur Status UI
function setStatus(state, pesan) {
  statusUI.dataset.state = state;
  statusUI.textContent = pesan;
  statusUI.hidden = state === 'success';
  btnCobaLagi.hidden = state !== 'error';
}

// 3. Render Daftar Keterampilan & Fitur Hapus
function renderKeterampilan() {
  daftarKeterampilan.replaceChildren();
  
  if (keterampilanData.length === 0) {
     const p = document.createElement('p');
     p.textContent = 'Daftar keterampilan kosong.';
     p.style.color = '#dc2626';
     p.style.fontStyle = 'italic';
     daftarKeterampilan.append(p);
     return;
  }

  keterampilanData.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item.nama;
    
    const btnHapus = document.createElement('button');
    btnHapus.type = 'button';
    btnHapus.textContent = 'Hapus';
    
    // Fitur Hapus
    btnHapus.addEventListener('click', () => {
      keterampilanData = keterampilanData.filter(k => k.id !== item.id);
      renderKeterampilan();
    });
    
    li.append(btnHapus);
    daftarKeterampilan.append(li);
  });
}

// 4. Proses Asynchronous Load Profile
async function muatProfil() {
  setStatus('loading', 'Memuat profil...');
  btnMuat.disabled = true; // Mencegah klik berulang
  
  try {
    // Delay buatan 500ms agar efek loading bisa diamati
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const response = await fetch('data/profile.json');
    if (!response.ok) {
      throw new Error(`HTTP Error Status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (Object.keys(data).length === 0) {
      setStatus('empty', 'Data JSON kosong.');
      return;
    }
    
    // Injeksi data
    namaProfil.textContent = data.nama;
    prodiProfil.textContent = data.prodi;
    deskripsiProfil.textContent = data.deskripsi;
    keterampilanData = data.keterampilan || [];
    
    renderKeterampilan();
    
    setStatus('success', '');
    profileContent.hidden = false;
    btnMuat.hidden = true; // Sembunyikan tombol muat utama bila sukses
    
  } catch (error) {
    console.error(error);
    setStatus('error', `Gagal memuat: ${error.message}`);
  } finally {
    btnMuat.disabled = false;
  }
}

btnMuat.addEventListener('click', muatProfil);
btnCobaLagi.addEventListener('click', muatProfil);

// 5. Fitur Tambah Keterampilan (Validasi)
formKeterampilan.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const nilaiInput = inputKeterampilan.value.trim();
  
  if (nilaiInput.length === 0) {
    errorKeterampilan.textContent = 'Keterampilan tidak boleh kosong.';
    inputKeterampilan.setAttribute('aria-invalid', 'true');
    return;
  }
  
  // Jika Lolos Validasi
  errorKeterampilan.textContent = '';
  inputKeterampilan.setAttribute('aria-invalid', 'false');
  
  // Push data baru dengan ID berbasis timestamp
  keterampilanData.push({ 
    id: Date.now(), 
    nama: nilaiInput 
  });
  
  formKeterampilan.reset();
  renderKeterampilan();
});