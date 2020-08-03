const mongoose = require('mongoose');

const receitaSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
	  required: [true, 'A tour must have a description'],
      trim: true,
    },
    descricao: {
      type: String,
      required: [true, 'A tour must have a description'],
      trim: true,
    },
    preparo: {
      type: String,
      required: [true, 'A tour must have a description'],
      trim: true
    },
    rendimento: {
      type: String,
      required: [true, 'A tour must have a description'],
      trim: true
    },
    tempo: {
      type: String,
      required: [true, 'A tour must have a description'],
      trim: true
    },
    preco: {
      type: String,
      required: [true, 'A tour must have a description'],
      trim: true
    },
    ingredientes: {
      type: String,
      required: [true, 'A tour must have a description'],
      trim: true
    }
	/*,
    imageCover: {
      type: String,
      required: [true, 'A tour must have a cover image']
    },
    images: [String]
	*/
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

const Receita = mongoose.model('Receita', receitaSchema);

module.exports = Receita;
