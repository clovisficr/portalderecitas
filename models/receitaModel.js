const mongoose = require('mongoose');

const receitaSchema = new mongoose.Schema(
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
    preparo: {
      type: String,
      required: [true, 'adicionar preparo obrigatorio a receita'],
      trim: true
    },
    rendimento: {
      type: String,
      required: [true, 'adicionar rendimento obrigatorio a receita'],
      trim: true
    },
    tempo: {
      type: String,
      required: [true, 'adicionar tempo obrigatorio a receita'],
      trim: true
    },
    preco: {
      type: String,
      required: [true, 'adicionar preco obrigatorio a receita'],
      trim: true
    },
    ingredientes: {
      type: String,
      required: [true, 'adicionar ingredientes obrigatorio a receita'],
      trim: true
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

const Receita = mongoose.model('Receita', receitaSchema);

module.exports = Receita;
