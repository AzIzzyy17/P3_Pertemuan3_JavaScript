'use strict'; 
  
const peserta = [ 
  { id: 1, nama: 'Alya', prodi: 'Teknik Informatika' }, 
  { id: 2, nama: 'Bima', prodi: 'Sistem Informasi' }, 
]; 
  
const form = document.querySelector('#form-peserta'); 
const namaInput = document.querySelector('#nama'); 
const prodiInput = document.querySelector('#prodi'); 
const filterInput = document.querySelector('#filter-prodi'); 
const daftar = document.querySelector('#daftar-peserta'); 
const status = document.querySelector('#status'); 
const errorNama = document.querySelector('#error-nama'); 
const errorProdi = document.querySelector('#error-prodi'); 
  
function validasiPeserta(calon) { 
  let errorNama = '';
  let errorProdi = '';
  let valid = true;
  if (calon.nama.length < 3) {
    errorNama = 'Nama minimal 3 karakter.';
    valid = false;
  }
  if (calon.prodi === '') {
    errorProdi = 'Program studi wajib dipilih.';
    valid = false;
  }
  return { valid, errorNama, errorProdi };
} 
  
function buatKartuPeserta(item) { 
const article = document.createElement('article');
  article.classList.add('kartu'); 
  const h2 = document.createElement('h2');
  h2.textContent = item.nama;
  const p = document.createElement('p');
  p.textContent = item.prodi;
  article.append(h2, p);
  return article;
} 
  
function renderPeserta(data) { 
 daftar.replaceChildren();
  if (data.length === 0) {
    status.textContent = 'Tidak ada peserta';
    return;
  }
  status.textContent = ''; 
  for (const item of data) {
    daftar.append(buatKartuPeserta(item));
  }
} 
  
form.addEventListener('submit', (event) => { 
  event.preventDefault(); 
 const calon = {
    nama: namaInput.value.trim(),
    prodi: prodiInput.value
  };
  const hasilValidasi = validasiPeserta(calon);
  errorNama.textContent = hasilValidasi.errorNama;
  namaInput.setAttribute('aria-invalid', hasilValidasi.errorNama ? 'true' : 'false');
  errorProdi.textContent = hasilValidasi.errorProdi;
  prodiInput.setAttribute('aria-invalid', hasilValidasi.errorProdi ? 'true' : 'false');
  if (hasilValidasi.valid) {
    calon.id = Date.now();
    peserta.push(calon);
    form.reset();
    filterInput.value = 'semua';
    renderPeserta(peserta);
  }
});  
  
filterInput.addEventListener('change', () => { 
 const prodiPilihan = filterInput.value;
  if (prodiPilihan === 'semua') {
    renderPeserta(peserta);
  } else {
    const dataFilter = peserta.filter(item => item.prodi === prodiPilihan);
    renderPeserta(dataFilter);
  }
}); 
  
renderPeserta(peserta); 