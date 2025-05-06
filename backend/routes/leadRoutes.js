const express = require('express');
const router = express.Router();
const leadCtrl = require('../controllers/leadController');
const { protect, authorize } = require('../auth/authMiddleware');

// Todas as rotas exigem autenticação
router.use(protect);

// GET /api/leads      -> Lista
router.get('/', leadCtrl.getLeads);

// POST /api/leads     -> Cria
router.post('/', leadCtrl.createLead);

// PUT /api/leads/:id  -> Atualiza
router.put('/:id', leadCtrl.updateLead);

// DELETE /api/leads/:id -> Remove (apenas ADM ou OPERACIONAL)
router.delete('/:id', authorize('ADMINISTRADOR', 'OPERACIONAL'), leadCtrl.deleteLead);

module.exports = router;