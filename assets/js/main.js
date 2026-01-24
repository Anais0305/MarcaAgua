/* =====================================
   AquaVida - main.js
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===== SCROLL SUAVE ===== */
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", e => {
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    /* ===== HEADER DINÁMICO POR SECCIÓN ===== */
    const header = document.querySelector("header");
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.dataset.header;
            }
        });

        header.className = "";
        header.classList.add(current || "scrolled");
    });

    /* ===== BOTÓN WHATSAPP ===== */
    const whatsapp = document.querySelector(".whatsapp");
    if (whatsapp) {
        window.addEventListener("scroll", () => {
            whatsapp.style.opacity = window.scrollY > 200 ? "1" : "0.85";
        });
    }

    /* ===== FORMULARIO ===== */
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", e => {
            e.preventDefault();
            alert("Gracias por contactarnos 💧");
            form.reset();
        });
    }

    /* ===== MENU HAMBURGUESA iOS ===== */
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {
            menuToggle.classList.toggle("active"); // ☰ → ✕
            navMenu.classList.toggle("active");    // menú lateral
        });

        // Cerrar menú al hacer click en link
        navMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                menuToggle.classList.remove("active");
            });
        });

    } else {
        console.warn("⚠️ menu-toggle o nav-menu no encontrados");
    }
    /* ===== SLIDER PRODUCTOS AUTO ===== */
    const track = document.querySelector('.productos-track');
    const items = document.querySelectorAll('.producto');

    let index = 0;
    const visible = window.innerWidth >= 768 ? 3 : 1;

    setInterval(() => {
        index++;
        if (index > items.length - visible) {
            index = 0;
        }
        const move = index * (items[0].offsetWidth + 25);
        track.style.transform = `translateX(-${move}px)`;
    }, 3000);

});
