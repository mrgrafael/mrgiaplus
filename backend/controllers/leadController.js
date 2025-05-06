const Lead = require('../models/Lead');

/**
 * GET /api/leads
 * Lista todos os leads.
 */
exports.getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter leads', error });
  }
};

/**
 * POST /api/leads
 * Cria um novo lead.
 */
exports.createLead = async (req, res) => {
  try {
    const lead = new Lead(req.body);
    const saved = await lead.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar lead', error });
  }
};

/**
 * PUT /api/leads/:id
 * Atualiza um lead existente.
 */
exports.updateLead = async (req, res) => {
  try {
    const updated = await Lead.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) {
      return res.status(404).json({ message: 'Lead não encontrado' });
    }
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar lead', error });
  }
};

/**
 * DELETE /api/leads/:id
 * Remove um lead existente.
 */
exports.deleteLead = async (req, res) => {
  try {
    const removed = await Lead.findByIdAndDelete(req.params.id);
    if (!removed) {
      return res.status(404).json({ message: 'Lead não encontrado' });
    }
    res.json({ message: 'Lead removido com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao remover lead', error });
  }
};