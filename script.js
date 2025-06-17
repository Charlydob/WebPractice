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

// FORMULARIO: guardar y mostrar en localStorage
const form = document.getElementById('contact-form');
const submissionsList = document.getElementById('formSubmissions'); // Este div lo usaremos para mostrar los datos

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();

    if (!name || !email || !message) {
      alert('Por favor completa todos los campos.');
      return;
    }

    const formData = {
      name,
      email,
      message,
      date: new Date().toLocaleString()
    };

    const existing = JSON.parse(localStorage.getItem('contactMessages')) || [];
    existing.push(formData);
    localStorage.setItem('contactMessages', JSON.stringify(existing));

    alert('Mensaje guardado localmente.');
    form.reset();
    renderMessages();
  });

  // Mostrar mensajes guardados
  function renderMessages() {
    const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    if (!submissionsList) return;
    submissionsList.innerHTML = '';

    messages.forEach(msg => {
      const item = document.createElement('div');
      item.innerHTML = `
        <strong>${msg.name}</strong> (${msg.email})<br/>
        <em>${msg.date}</em><br/>
        <p>${msg.message}</p>
        <hr/>
      `;
      submissionsList.appendChild(item);
    });
  }

  // Mostrar al cargar la página
  renderMessages();
}
