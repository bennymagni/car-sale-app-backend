const express = require('express');
const router = express.Router();
const { SubmitDataController } = require('../controller/submitDataController');
const { getDataController } = require('../controller/getDataController')
const { getMainDataController } = require('../controller/getDataMainController');
const { upload } = require('../middleware/upload')

router.route('/')
    .post(upload.single('imageUploaded'), SubmitDataController)
    .get(getMainDataController)


module.exports = router