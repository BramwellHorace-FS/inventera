const { CustomError } = require('../utils/errors');
const { cloudinary } = require('../utils/cloudinary');

// GET /api/avatar
exports.getOne = async (req, res, next) => {
  try {
    const id = req.user.id;

    const image = await cloudinary.api.resource(id);

    if (!image) {
      throw new CustomError('NotFoundError', 404, 'Image not found');
    }

    res.status(200).json(image.derived[0].url);
  } catch (error) {
    next(error);
  }
};

// POST /api/avatar
exports.upload = async (req, res, next) => {
  try {
    const imageStr = req.body.imageString;

    if (!imageStr) {
      throw new CustomError('InvalidImageError', 400, 'Invalid image');
    }

    const image = await cloudinary.uploader.upload(
      imageStr,
      {
        public_id: `${req.user.id}`,
        tags: 'profile-image',
        folder: 'avatars',
        transformation: [{ width: 150, height: 150, crop: 'fill' }],
      },
      (err, result) => {
        if (err) {
          res.status(500).json({ error: err });
        }
      }
    );

    res.status(201).json({ message: 'Image uploaded successfully' });
  } catch (error) {
    next(error);
  }
};
