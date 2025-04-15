const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  apiKey: "SUA_OPENAI_API_KEY_AQUI",
});

const openai = new OpenAIApi(config);

async function getOpenAIResponse(message) {
  try {
    const res = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });

    return res.data.choices[0].message.content.trim();
  } catch (err) {
    console.error("Erro na IA:", err.message);
    return "Desculpe, houve um erro ao gerar a resposta.";
  }
}

module.exports = { getOpenAIResponse };