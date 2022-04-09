const { Production } = require('../../db/models');
const { uuid } = require('uuidv4');
const createError = require('http-errors');

const status = 404;
const message = 'Production not found';

exports.getAll = async (req, res, next) => {
  try {
    const productions = await Production.findAll();

    res.status(200).json(productions);
  } catch (err) {
    next(err);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const production = await Production.findByPk(req.params.id);

    if (!production) throw createError(status, message);

    res.status(200).json(production);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const production = await Production.create({
      id: uuid(),
      ...req.body,
    });

    res.status(201).json(production);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const production = await Production.findByPk(req.params.id);

    if (!production) throw createError(status, message);

    await production.update(req.body);

    res.status(200).json(production);
  } catch (err) {
    next(err);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const production = await Production.findByPk(req.params.id);

    if (!production) throw createError(status, message);

    await production.destroy();

    res.status(204).json();
  } catch (err) {
    next(err);
  }
};
