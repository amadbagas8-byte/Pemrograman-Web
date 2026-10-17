let nama = "Ahmad Hidayat";

function Sapa() {
    return alert("Halo " + nama);
}

function showAlert() {
    alert("Ini adalah pesan alert dari JavaScript!");
}

function greetUser() {
    const name = prompt("Siapa nama Anda?");
    if (name) {
        alert("Halo, " + name + "! Selamat datang.");
    } else {
        alert("Halo! Selamat datang di website kami.");
    }
}

function validateForm() {
    let nama = document.forms["formPendaftaran"]["nama"].value;
    let email = document.forms["formPendaftaran"]["email"].value;
    if (nama == "" || email == "") {
        alert("Nama dan email harus diisi.");
        return false;
    }
    return true;
}

document.getElementById("emailForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const err = document.getElementById("emailError");
    err.textContent = "";
    const email = document.getElementById("email").value.trim();
    const pola = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        err.textContent = "Email tidak boleh kosong.";
    } else if (!pola.test(email)) {
        err.textContent = "Format email tidak valid.";
    } else {
        alert("Email berhasil dikirim!");
        this.reset();
    }
});

function showMessage() {
    alert("Ini adalah pesan dari JavaScript!");
}

function changeBackground() {
    document.body.style.backgroundColor = "lightcoral";
}

function validateRegistrationForm() {
    let f = document.forms["registrationForm"];
    let email = f["email"].value;
    let password = f["password"].value;
    if (email == "" || email.indexOf("@") == -1) {
        alert("Masukkan email yang valid.");
        return false;
    }
    if (password.length < 6) {
        alert("Kata sandi harus memiliki minimal 6 karakter.");
        return false;
    }
    alert("Pendaftaran berhasil!");
    return true;
}

function changeText() {
    document.getElementById("myParagraph").innerHTML = "Teks telah berubah!";
}