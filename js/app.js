// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// Event Listeners
eventListeners();
function eventListeners(params) {
   formulario.addEventListener('submit', agregarTweet);
}

// Funciones
function agregarTweet(e) {
   e.preventDefault();

   // Textarea donde el usuario escribe
   const tweet = document.querySelector('#tweet').value;

   // validación...
   if (tweet === '') {
      mostrarError('Un mensaje no puede ir vaicio');
      return; // evita que se ejecute más lineas de codigo
   }

   const tweetObj = {
      id: Date.now(),
      tweet,
   };

   // Añadir al arraglo de tweets
   tweets = [...tweets, tweetObj];

   // Una vez agregado vamos a crear el HTML
   crearHTML();

   // Reiniciar el formulario
   formulario.reset();
}

// Mostrar mensaje de error
function mostrarError(error) {
   const mensajeError = document.createElement('p');
   mensajeError.textContent = error;
   mensajeError.classList.add('error');

   // Insertarlo en el contenido
   const contenido = document.querySelector('#contenido');
   contenido.appendChild(mensajeError);

   setTimeout(() => {
      mensajeError.remove();
   }, 3000);
}

// Muestra un listado de los tweets
function crearHTML() {
   limpiarHTML();

   if (tweets.length > 0) {
      tweets.forEach((t) => {
         // Crear el HTML

         const li = document.createElement('li');

         // Añadir el texto
         li.innerHTML = t.tweet;

         // Insertarlo en el HTML
         listaTweets.appendChild(li);
      });
   }
}

// Limpiar el HTML
function limpiarHTML() {
   while (listaTweets.firstChild) {
      listaTweets.removeChild(listaTweets.firstChild);
   }
}
