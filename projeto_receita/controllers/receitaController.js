const Receita = require('./../models/receitaModel');
const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getAllReceitas = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Receita.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const receitas = await features.query;

  res.status(200).json({
    status: 'success',
    results: receitas.length,
    data: {
      receitas
    }
  });
});

exports.getReceita = catchAsync(async (req, res, next) => {
  const receita = await Receita.findById(req.params.id);

  if (!receita) {
    return next(new AppError('No receita found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      receita
    }
  });
});

exports.createReceita = catchAsync(async (req, res, next) => {
  const newReceita = await Receita.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      receita: newReceita
    }
  });
});

exports.updateReceita = catchAsync(async (req, res, next) => {
  const receita = await Receita.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!receita) {
    return next(new AppError('No receita found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      receita
    }
  });
});

exports.deleteReceita = catchAsync(async (req, res, next) => {
  const receita = await Receita.findByIdAndDelete(req.params.id);

  if (!receita) {
    return next(new AppError('No receita found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
});
