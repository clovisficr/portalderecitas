const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
	  required: [true, 'adicionar nome obrigatorio a receita'],
      trim: true,
    },
    descricao: {
      type: String,
      required: [true, 'adicionar descricao obrigatorio a receita'],
      trim: true,
    },
    fabricante: {
      type: String,
      required: [true, 'adicionar fabricante obrigatorio a receita'],
      trim: true
    },
    fornecedor: {
      type: String,
      required: [true, 'adicionar fornecedor obrigatorio a receita'],
      trim: true
    },
    preco: {
      type: String,
      required: [true, 'adicionar preco obrigatorio a receita'],
      trim: true
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

const Produto = mongoose.model('Produto', produtoSchema);

module.exports = Produto;
