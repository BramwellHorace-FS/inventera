const { Material, Category, Supplier, Unit } = require('../../db/models');
const { uuid } = require('uuidv4');

exports.getAll = async (req, res, next) => {
  try {
    const materials = await Material.findAll({
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name'],
        },
        {
          model: Unit,
          as: 'unit',
          attributes: ['id', 'name', 'abbr'],
        },
        {
          model: Supplier,
          as: 'supplier',
          attributes: ['id', 'name'],
        },
      ],
    });

    res.status(200).json(materials);
  } catch (err) {
    next(err);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const material = await Material.findByPk(req.params.id, {
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name'],
        },
        {
          model: Unit,
          as: 'unit',
          attributes: ['id', 'name', 'abbr'],
        },
        {
          model: Supplier,
          as: 'supplier',
          attributes: ['id', 'name'],
        },
      ],
    });

    res.status(200).json(material);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const material = await Material.create({
      id: uuid(),
      ...req.body,
    });

    res.status(201).json(material);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const material = await Material.findByPk(req.params.id);
    await material.update(req.body);

    res.status(200).json(material);
  } catch (err) {
    next(err);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const material = await Material.findByPk(req.params.id);
    await material.destroy();

    res.status(204).json();
  } catch (err) {
    next(err);
  }
};
