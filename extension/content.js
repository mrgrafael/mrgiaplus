// Este script é injetado no WhatsApp Web
function enviarMensagem(numero, texto) {
  console.log("Simulando envio para:", numero, texto);
  // Lógica de automação pode ser expandida aqui.
}

// Exemplo: responder mensagem automaticamente após 3 segundos
setTimeout(() => {
  let lista = JSON.parse(localStorage.getItem("listaDisparo") || "[]");
  let index = parseInt(localStorage.getItem("indexAtual") || "0");
  if (lista[index]) {
    enviarMensagem(lista[index].numero, lista[index].mensagem);
    localStorage.setItem("indexAtual", index + 1);
  }
}, 3000);