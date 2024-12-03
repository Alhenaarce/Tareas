// Selección de las porciones y los pepperonis
const porciones = document.querySelectorAll('.porcion');
const pepperoni = document.querySelectorAll('.pepperoni');

// Función para animar las porciones de la pizza
function animarPizza() {
  porciones.forEach((porcion, index) => {
    setTimeout(() => {
      porcion.classList.add('visible'); // Muestra la porción
    }, index * 500); // Retardo entre cada porción
  });

  // Mostrar los pepperonis después de que las porciones estén completas
  setTimeout(() => {
    pepperonis.forEach((pepperoni, index) => {
      setTimeout(() => {
        pepperoni.classList.add('visible'); // Muestra el pepperoni
      }, index * 200); // Retardo entre pepperonis
    });
  }, porciones.length * 500); // Espera a que todas las porciones se muestren
}

// Ejecutar la animación al cargar la página
animarPizza();

// Selecciona los trozos y los pepperonis
const slices = document.querySelectorAll('.slice');
const pepperonis = document.querySelectorAll('.pepperoni');

