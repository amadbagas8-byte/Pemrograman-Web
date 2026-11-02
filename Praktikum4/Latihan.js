// 1. Pesan selamat datang
window.addEventListener("load", function () {
    alert("Selamat datang di Blog Saya!");
});

// 2. Animasi hover menu
const menu = document.querySelectorAll("nav a");
menu.forEach(function (link) {
    link.addEventListener("mouseover", function () {
        link.style.fontSize = "1.2em";
    });
    link.addEventListener("mouseout", function () {
        link.style.fontSize = "1em";
    });
});

// 3. Validasi form
const form = document.getElementById("formKontak");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const pesan = document.getElementById("pesan").value.trim();

    if (nama === "") {
        document.getElementById("errNama").textContent = "Nama tidak boleh kosong.";
        valid = false;
    } else {
        document.getElementById("errNama").textContent = "";
    }

    if (email === "") {
        document.getElementById("errEmail").textContent = "Email tidak boleh kosong.";
        valid = false;
    } else {
        document.getElementById("errEmail").textContent = "";
    }

    if (pesan === "") {
        document.getElementById("errPesan").textContent = "Pesan tidak boleh kosong.";
        valid = false;
    } else {
        document.getElementById("errPesan").textContent = "";
    }

    if (valid) {
        alert("Pesan berhasil dikirim!");
        form.reset();
    }
});