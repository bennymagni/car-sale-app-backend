const { Cars } = require('../model/carData')

const UploadImage = async (req, res) => {
    if (!req.file){
        return res.status(400).json({message:'File not found, Pls Upload a file'})
    }

    try {
        const result = await Cars.create({
            originalName: req.file.originalname,
            contentType: req.file.mimetype,
            binaryData : req.file.buffer
        })

          res.status(200).json({
            success: true,
            message: 'File upload successful',
            ImageId: result._id
    })
    } catch (error) {
        console.error(error)
        res.status(400).json({message: 'Failed to upload Image to database'})
    }
}

module.exports = { UploadImage }

