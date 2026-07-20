const express = require('express');
const router = express.Router();
const { UploadImage } = require('../controller/UploadImageController');
const { upload } = require('../middleware/upload');

router.route('/')
    .post(upload.single('imageUploaded'), UploadImage)

module.exports = router

