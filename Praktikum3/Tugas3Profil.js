document.getElementById("profilForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const hp = document.getElementById("hp").value.trim();

    document.getElementById("namaError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("hpError").textContent = "";

    let valid = true;

    if (nama === "") {
        document.getElementById("namaError").textContent = "Nama tidak boleh kosong.";
        valid = false;
    }

    if (email === "") {
        document.getElementById("emailError").textContent = "Email tidak boleh kosong.";
        valid = false;
    }

    if (hp === "") {
        document.getElementById("hpError").textContent = "No. HP tidak boleh kosong.";
        valid = false;
    }

    if (valid) {
        alert("Form berhasil dikirim!");
        this.reset();
    }
});