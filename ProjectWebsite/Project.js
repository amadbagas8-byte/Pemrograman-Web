let navbar = document.getElementById("navbar");

function ubahNavbar() {
    if (window.scrollY > 50) {
        navbar.classList.add("scroll");
    } else {
        navbar.classList.remove("scroll");
    }
}

window.onscroll = ubahNavbar;