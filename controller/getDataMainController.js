const { mainModel } = require('../model/carData'); 

const getMainDataController = async (req, res) => {

    try {

        const result = await mainModel.find();

        const formatedData = result.map((item) => (
            {
                fullName: item.fullName,
                phoneNumber: item.phoneNumber,
                carBrand: item.carBrand,
                model: item.model,
                manufactureYear: item.manufactureYear,
                registrationYear: item.registrationYear,
                mileage: item.mileage,
                engineCapacity: item.engineCapacity,
                hiddenFaults: item.hiddenFaults,
                userID:item.userID,
                faultDescription: item.faultDescription,
                status: item.status,
                mimetype: item.imageType,
                image: item.imageOfCar.toString('base64')
            }
        ))

        res.status(200).json(formatedData)

    } catch (error) {
        res.status(500).json({error:'failed to retrieve database items'});
        console.error(error)
    }

}

module.exports = { getMainDataController }