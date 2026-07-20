const  { OwnersAndCars, Cars, mainModel } = require('../model/carData');
const { nanoid } = require('nanoid')

const SubmitDataController = async (req, res) => {

    if(!req?.body?.fullName){
        return res.status(400).json({'message': 'Full Name required'})
    } else if(!req?.body?.phoneNumber) {
        return res.status(400).json({'message': 'Phone Number required'})
    } else if (!req?.body?.carBrand){
        return res.status(400).json({'message': 'Email Required'})
    } else{
        try {

            const userID = nanoid(10);
            const result = await mainModel.create({
                fullName : req.body.fullName,
                phoneNumber : req.body.phoneNumber,
                carBrand : req.body.carBrand,
                manufactureYear : req.body.manufactureYear,
                mileage : req.body.mileage,
                model : req.body.model,
                registrationYear : req.body.registrationYear,
                engineCapacity : req.body.engineCapacity,
                hiddenFaults : req.body.hiddenFaults,
                faultDescription : req.body.faultDescription,
                imageOfCar : req.file.buffer,
                imageType : req.file.mimetype,
                status : req.body.status,
                userID
            })
            const fullName = req.body.fullName;
            const phoneNumber = req.body.phoneNumber;
            

            res.status(201).json({fullName, phoneNumber, userID, success: true, message:'Data Submitted successfully'});

        } catch (error) {
            res.status(400).json({message:'failed to load image to database'})
            console.log(error);
        }
    }
}

module.exports = { SubmitDataController }