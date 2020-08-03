const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema(
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
    fabricante: {
      type: String,
      required: [true, 'A tour must have a description'],
      trim: true
    },
    fornecedor: {
      type: String,
      required: [true, 'A tour must have a description'],
      trim: true
    },
    preco: {
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

const Produto = mongoose.model('Produto', produtoSchema);

module.exports = Produto;
