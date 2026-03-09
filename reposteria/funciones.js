// funciones.js - Efectos simples para el folleto

document.addEventListener('DOMContentLoaded', function() {

    console.log('🎂 Folleto Merida Pastelería con Menú cargado');

    // Efecto hover en galería
    const galeriaItems = document.querySelectorAll('.galeria-item');
    galeriaItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.03)';
            this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });

    // Efecto hover en productos mini
    const productos = document.querySelectorAll('.producto-item');
    productos.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#E6C14A';
        });

        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#F9E076';
        });
    });

    // Manejo del logo (si no carga la imagen)
    const logoImg = document.getElementById('logoImg');
    if (logoImg) {
        logoImg.onerror = function() {
            this.style.display = 'none';
            const logoDiv = document.querySelector('.logo-flyer');
            const textoAlterno = document.createElement('h1');
            textoAlterno.className = 'logo-text';
            textoAlterno.innerHTML = 'Merida<span class="logo-dot">.</span>';
            logoDiv.appendChild(textoAlterno);
        };
    }

    // Animación suave al cargar
    const flyer = document.querySelector('.flyer-container');
    flyer.style.opacity = '0';
    flyer.style.transform = 'translateY(20px)';
    flyer.style.transition = 'all 0.6s ease';

    setTimeout(() => {
        flyer.style.opacity = '1';
        flyer.style.transform = 'translateY(0)';
    }, 100);
});
