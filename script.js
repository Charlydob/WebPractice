// Scroll suave para los enlaces internos
const linksInternos = document.querySelectorAll('a[href^="#"]');
linksInternos.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Toggle del menú de navegación
function toggleMenu() {
  const nav = document.querySelector('nav ul');
  nav.classList.toggle('active');
}

// Validación de formulario de contacto
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      alert('Por favor completa todos los campos.');
      return;
    }

    // Aquí podrías agregar lógica de envío real o mensaje de éxito
    alert('Formulario enviado correctamente.');
    form.reset();
  });
}

// Efecto lightbox para imágenes de proyectos
const images = document.querySelectorAll('.lightbox-img');
images.forEach(img => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = 0;
    modal.style.left = 0;
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = 9999;

    const imgElement = document.createElement('img');
    imgElement.src = img.src;
    imgElement.alt = img.alt;
    imgElement.style.maxWidth = '90%';
    imgElement.style.maxHeight = '90%';

    modal.appendChild(imgElement);
    document.body.appendChild(modal);

    modal.addEventListener('click', () => {
      modal.remove();
    });
  });
});
