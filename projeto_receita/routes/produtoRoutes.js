const express = require('express');
const produtoController = require('./../controllers/produtoController');

const router = express.Router();

router
  .route('/')
  .get(produtoController.getAllProdutos)
  .post(produtoController.createProduto);

router
  .route('/:id')
  .get(produtoController.getProduto)
  .patch(produtoController.updateProduto)
  .delete(produtoController.deleteProduto);

module.exports = router;
