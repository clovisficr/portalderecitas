const express = require('express');
const receitaController = require('./../controllers/receitaController');

const router = express.Router();

router
  .route('/')
  .get(receitaController.getAllReceitas)
  .post(receitaController.createReceita);

router
  .route('/:id')
  .get(receitaController.getReceita)
  .patch(receitaController.updateReceita)
  .delete(receitaController.deleteReceita);

module.exports = router;
