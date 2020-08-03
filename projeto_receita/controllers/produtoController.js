const Produto = require('./../models/produtoModel');
const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getAllProdutos = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Produto.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const produtos = await features.query;

  res.status(200).json({
    status: 'success',
    results: produtos.length,
    data: {
      produtos
    }
  });
});

exports.getProduto = catchAsync(async (req, res, next) => {
  const produto = await Produto.findById(req.params.id);

  if (!produto) {
    return next(new AppError('No produto found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      produto
    }
  });
});

exports.createProduto = catchAsync(async (req, res, next) => {
  const newProduto = await Produto.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      produto: newProduto
    }
  });
});

exports.updateProduto = catchAsync(async (req, res, next) => {
  const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!produto) {
    return next(new AppError('No produto found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      produto
    }
  });
});

exports.deleteProduto = catchAsync(async (req, res, next) => {
  const produto = await Produto.findByIdAndDelete(req.params.id);

  if (!produto) {
    return next(new AppError('No produto found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
});
