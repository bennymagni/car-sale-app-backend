const { OwnerAndCarData } = require('../model/carData');
const { Cars } = require('../model/carData');

const getDataController = async (req, res) => {
   /*  try {
        const results = await Cars.find();
        if(!results) res.status(204).json({'message': 'no user data in database'})
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json()
    } */

  try {
    const items = await Cars.find(); // Fetch everything from the collection
    
    // Transform the array to include a base64 string for React
    const formattedItems = items.map(item => {

      return {
        id: item._id,
        text: item.originalName,
        mimetype: item.contentType,
        imageData: item.binaryData.toString('base64')
      };

    });

    res.json(formattedItems);
    /*console.log(formattedItems)*/
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch database items" });
    console.error(error);
  }


}

module.exports = { getDataController }