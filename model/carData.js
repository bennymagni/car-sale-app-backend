const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSaleSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },

    lastName:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required:true
    }
})


const UserAndCarData = new Schema({
    fullName:{
        type: String,
        required: true
    },

    phoneNumber:{
        type: String,
        required: true
    },

    carBrand:{
        type: String,
        required: true
    },

    model:{
        type: String,
        required: true
    },

    manufactureYear:{
        type: String,
        required: true
    },

    registrationYear:{
        type: String,
        required: true
    },
    
    mileage:{
        type: String,
        required: true
    },
    engineCapacity:{
        type: String,
        required: true
    },
    hiddenFaults:{
        type: String,
        required: true
    },

    faultDescription:{
        type: String,
        default: 'No Faults'
    },

   imageOfCar:{
        type: Buffer,
        required: true
    },

    upLoadedAt: {
        type: Date,
        default: Date.now
    },

    imageType: String,
    status: {
        type: String,
        default: 'Eligible'
    },

    userID: String
})

const CarImages = new Schema({
    originalName: String,
    contentType: String,
    binaryData: Buffer,
    uploadedAt: {type: Date, default: Date.now}
});

const OwnersAndCars = mongoose.model('OwnersAndCar', CarSaleSchema);
const Cars = mongoose.model('Cars', CarImages);
const mainModel = mongoose.model('CarSellers', UserAndCarData);

module.exports = { OwnersAndCars, Cars, mainModel }