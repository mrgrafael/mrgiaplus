const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: String,
  status: {
    type: String,
    enum: ['Novo', 'Em Atendimento', 'Concluído'],
    default: 'Novo',
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Lead', leadSchema);