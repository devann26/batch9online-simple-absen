// ambil elemnnt asben_form
let absen_form = document.getElementById('absen_form');
// ambil elemnnt root
let root = document.getElementById('root');

// kita buat array untuk menampung data absensi

let absen_data = [];

// tambahkan listener submit ke element absen_form

absen_form.addEventListener('submit', (event) => {
  event.preventDefault();

  let fullname = event.target.fullname.value;

  // console.log(fullname);

  if (!fullname) {
    alert('Silahkan masukin lagi');
    return;
  }

  absen_data.push({
    nama_lengkap: fullname,
    waktu: new Date().toLocaleTimeString(),
    tanggal: new Date().toLocaleDateString(),
  });
  // reset input field
  event.target.fullname.value = '';
  renderToHtml();
});
// function untuk render data array ke div root

function renderToHtml() {
  root.innerHTML = '';

  // perulangan foreach dari array absen data
  absen_data.forEach((e, i) => {
    root.innerHTML += `
    <div class="card" draggable="true" ondragend="handleDelete(${i})">
   <span> ${i + 1}. &nbsp; ${e.nama_lengkap} </span>
   <span> ${e.waktu} ${e.tanggal} </span> 
    </div>
    `;
  });
}

// delete function
function handleDelete(index) {
  // console.log(index);
  absen_data.splice(index, 1);
  renderToHtml();
}
