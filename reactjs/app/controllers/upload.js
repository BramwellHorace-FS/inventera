const { cloudinary } = require('../utils/cloudinary');

// POST /api/upload
exports.upload = async (req, res, next) => {
  try {
    console.log(req);
  } catch (error) {
    next(error);
  }

  //   try {
  //     const { file } = req;

  //     // Upload image to cloudinary
  //     const result = await cloudinary.uploader.upload(file.path);

  //     // Send image details to client
  //     res.status(200).json({
  //       status: 200,
  //       message: 'Image uploaded successfully',
  //       image: result,
  //     });
  //   } catch (error) {
  //     next(error);
  //   }
};
