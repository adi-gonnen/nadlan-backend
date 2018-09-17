const ObjectId = require('mongodb').ObjectId;
const MongoService = require('./MongoService') 

function getHouses() {
    // console.log('service back before');
    var criteria = {};
    return MongoService.connect()
        .then(db => {
            const collection = db.collection('house');
            return collection.find(criteria).toArray()
        })
}

function getHouseById(houseId) {
    houseId = new ObjectId(houseId)
    return MongoService.connect()
        .then(db => {
            const collection = db.collection('house');
            return collection.findOne({ _id: houseId })
        })
}

module.exports = {
    getHouses,
    getHouseById
}