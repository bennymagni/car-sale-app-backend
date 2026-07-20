
const multer = require('multer');
const path = require('path');

/* const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '_' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '_' + uniqueSuffix + path.extname(file.originalname) )
    }
})

const upload = multer({
    storage,
    limits : {fileSize: 2 * 1024 * 1024}
}) */

const storage = multer.memoryStorage();

const upload = multer({storage})

module.exports = { upload }