// Alamat API publik gratis untuk mendapatkan data pengguna
const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Dapatkan body tabel dari HTML berdasarkan ID-nya
const tableBody = document.getElementById('data-table-body');

// Fungsi untuk mengambil data dan menampilkannya
async function fetchDataAndDisplay() {
    try {
        // 1. Mengambil data dari API
        const response = await fetch(API_URL);
        const users = await response.json(); // Mengubah format JSON menjadi objek JavaScript

        // 2. Melakukan perulangan untuk setiap pengguna
        users.forEach(user => {
            // Membuat baris baru (<tr>) untuk setiap pengguna
            const row = document.createElement('tr');

            // Menambahkan data (<td>) ke dalam baris
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.website}</td>
            `;
            
            // Menambahkan baris ke body tabel di HTML
            tableBody.appendChild(row);
        });

    } catch (error) {
        // Menangani jika ada error saat fetch data
        console.error('Error fetching data:', error);
        tableBody.innerHTML = '<tr><td colspan="5">Gagal memuat data. Silakan coba lagi nanti.</td></tr>';
    }
}

// Panggil fungsi utama saat halaman dimuat
fetchDataAndDisplay();
