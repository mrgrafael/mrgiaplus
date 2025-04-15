const express = require("express");
const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const cors = require("cors");
const bodyParser = require("body-parser");
const { getOpenAIResponse } = require("./openai");
const disparo = require("./disparo");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const client = new Client({
  authStrategy: new LocalAuth()
});

client.on("qr", (qr) => {
  console.log("QR Code:");
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("✅ WhatsApp Web conectado");
});

client.on("message", async (message) => {
  if (message.fromMe) return;
  const response = await getOpenAIResponse(message.body);
  client.sendMessage(message.from, response);
});

app.post("/disparo/lista", (req, res) => {
  disparo.setLista(req.body.lista);
  res.send("Lista carregada");
});

app.post("/disparo/play", (_, res) => {
  disparo.play(client);
  res.send("Disparo iniciado");
});

app.post("/disparo/pause", (_, res) => {
  disparo.pause();
  res.send("Disparo pausado");
});

app.post("/disparo/stop", (_, res) => {
  disparo.stop();
  res.send("Disparo parado");
});

app.post("/disparo/delay", (req, res) => {
  disparo.setDelay(req.body.ms || 10000);
  res.send("Delay ajustado");
});

app.get("/disparo/status", (_, res) => {
  res.json(disparo.getStatus());
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Backend rodando em http://localhost:${PORT}`));