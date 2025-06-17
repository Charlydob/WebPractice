// Asegúrate de que tu formulario tenga la clase 'formularios' y los campos tengan atributo 'name'
const formulario = document.querySelector('.formularios');
if (formulario) {
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(this);
        const datos = {};

        for (let [clave, valor] of formData.entries()) {
            datos[clave] = valor;
        }

        console.log('Datos del formulario:', datos);
    });
} else {
    console.error("No se encontró el formulario con la clase '.formularios'");
}
