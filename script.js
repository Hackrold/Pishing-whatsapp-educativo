let codigoReal = "";

function enviarCodigo() {
  const telefono = document.getElementById("phone").value;
  if (!telefono) return alert("Por favor ingrese un número válido.");

  codigoReal = Math.floor(100000 + Math.random() * 900000).toString();
  console.log("Código enviado (simulado):", codigoReal);

  document.getElementById("step1").classList.remove("active");
  document.getElementById("step2").classList.add("active");

  // Después de 4 segundos, mostrar mensaje para pedir nuevo código
  setTimeout(() => {
    document.getElementById("mensajeCodigo").innerHTML = `
      ¿No recibió el código? <br/>
      <button onclick="mostrarCodigo()">Pedir nuevo código</button>
    `;
  }, 4000);
}

function mostrarCodigo() {
  document.getElementById("mensajeCodigo").innerHTML = `
    Código nuevo generado: <strong>${codigoReal}</strong>
  `;
}

function verificarCodigo() {
  const codigoIngresado = document.getElementById("codigo").value;
  if (codigoIngresado === codigoReal) {
    document.getElementById("step2").classList.remove("active");
    document.getElementById("step3").classList.add("active");

    // Mostrar paso 3 (bloqueo) por 10 segundos antes del mensaje final
    setTimeout(() => {
      document.getElementById("step3").classList.remove("active");
      document.getElementById("step4").classList.add("active");

      // Mantener aviso de simulación visible por 20 segundos antes de redirigir
      setTimeout(() => {
        window.location.href = "https://faq.whatsapp.com/1095301557782068/?helpref=uf_share";
      }, 20000); // 20 segundos
    }, 10000); // 10 segundos

  } else {
    alert("Código incorrecto. Intente nuevamente.");
  }
}


  
  