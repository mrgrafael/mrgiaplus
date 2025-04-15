let disparosAtivos = false;
let listaDisparo = [];
let indexAtual = 0;
let timer = null;
let contadorEnviados = 0;
let tempoEntre = 10000;

function iniciarDisparos(client) {
  if (!disparosAtivos || listaDisparo.length === 0) return;

  timer = setTimeout(async () => {
    if (indexAtual < listaDisparo.length && disparosAtivos) {
      const item = listaDisparo[indexAtual];
      try {
        await client.sendMessage(item.numero, item.mensagem);
        contadorEnviados++;
      } catch (e) {
        console.error("Erro ao enviar para", item.numero);
      }

      indexAtual++;
      iniciarDisparos(client);
    }
  }, tempoEntre);
}

function play(client) {
  if (!disparosAtivos) {
    disparosAtivos = true;
    iniciarDisparos(client);
  }
}

function pause() {
  clearTimeout(timer);
  disparosAtivos = false;
}

function stop() {
  clearTimeout(timer);
  disparosAtivos = false;
  indexAtual = 0;
  contadorEnviados = 0;
}

function setLista(lista) {
  listaDisparo = lista;
}

function setDelay(ms) {
  tempoEntre = ms;
}

function getStatus() {
  return {
    ativos: disparosAtivos,
    enviados: contadorEnviados,
    total: listaDisparo.length,
    indexAtual,
    tempoEntre,
  };
}

module.exports = { play, pause, stop, setLista, setDelay, getStatus };