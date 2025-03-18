// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
    // Arreglo para almacenar la lista de amigos
    let listaDeAmigos = [];

    // 1. Agregar un amigo
    function agregarAmigo() {
      const inputNombreAmigo = document.getElementById("amigo");
      const nombreAmigo = inputNombreAmigo.value.trim();

      if (!nombreAmigo) {
        alert("Debes ingresar un nombre");
        return;
      }

      listaDeAmigos.push(nombreAmigo);
      inputNombreAmigo.value = "";
      inputNombreAmigo.focus();

      mostrarListaDeAmigos();
    }

    // 2. Mostrar la lista de amigos
    function mostrarListaDeAmigos() {
      const contenedorListaAmigos = document.getElementById("listaAmigos");
      contenedorListaAmigos.innerHTML = "";

      listaDeAmigos.forEach((amigo) => {
        const elementoLi = document.createElement("li");
        elementoLi.textContent = amigo;
        contenedorListaAmigos.appendChild(elementoLi);
      });
    }

    // 3. Sortear un amigo
    function sortearAmigo() {
      if (listaDeAmigos.length < 2) {
        alert("Debes ingresar al menos dos amigos para poder realizar el sorteo");
        return;
      }

      const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
      const amigoSorteado = listaDeAmigos[indiceAleatorio];

      const contenedorResultado = document.getElementById("resultado");
      contenedorResultado.innerHTML = `El amigo(a) sorteado es: ${amigoSorteado}. ¡Felicidades!`;
   

      // Limpia la lista de amigos en la interfaz
      document.getElementById("listaAmigos").innerHTML = "";

      // Deshabilita los botones para evitar agregar más amigos o sortear nuevamente si ya tenemos un amigo sorteado
      document.getElementById("amigo").disabled = true;
      document.getElementById("añadir").disabled = true;
      document.getElementById("sortearBoton").disabled = true;

      // Efecto de confetti abundante en múltiples disparos
      for (let i = 0; i < 3; i++) {
      setTimeout(() => {
      confetti({
      particleCount: 300,
      spread: 160,
      origin: { y: 0.6 }
      });
      }, i * 300);
      }

    }

     // Permitir agregar el amigo presionando la tecla Enter
     document.getElementById("amigo").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
          agregarAmigo();
        }
      });
      