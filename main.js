alert('Bienvenido');


document.addEventListener('DOMContentLoaded', function() {
    const entradaTarea = document.getElementById('entradaTarea');
    const btnAgregarTarea = document.getElementById('btnAgregarTarea');
    const listaTareas = document.getElementById('listaTareas');

    btnAgregarTarea.addEventListener('click', function() {
      const textoTarea = entradaTarea.value.trim();
      if (textoTarea !== '') {
        agregarTarea(textoTarea);
        entradaTarea.value = '';
      } else {
        alert('¡Por favor ingresa una tarea!');
      }
    });

    function agregarTarea(textoTarea) {
      const li = document.createElement('li');
      li.innerText = textoTarea;
      
      const btnEliminar = document.createElement('button');
      btnEliminar.innerText = '❌';
      btnEliminar.classList.add('eliminar');
      btnEliminar.addEventListener('click', function() {
        listaTareas.removeChild(li);
      });

      const btnCompletar = document.createElement('button');
      btnCompletar.innerText = '✓';
      btnCompletar.classList.add('completar');
      btnCompletar.addEventListener('click', function() {
        li.classList.toggle('completada');
      });

      li.appendChild(btnCompletar);
      li.appendChild(btnEliminar);
      listaTareas.appendChild(li);
    }
  });