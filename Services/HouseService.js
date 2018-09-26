const ObjectId = require('mongodb').ObjectId;
const MongoService = require('./MongoService') 

function queryHouses(city, categorystr) {
    console.log('city', city, 'categorystr', categorystr);
    var criteria = {};
    
    if (city) criteria['txt.en.city'] = city; 
    if (categorystr) {
        var categories = categorystr.split(',');
        console.log('categories', categories);
        criteria.category = { $in: categories };
    };

    console.log('Criteria', criteria);
    return MongoService.connect()
            .then(db => {
                const collection = db.collection('house');
                return collection.find(criteria).toArray()
            })
}

// function getHouses() {
//     // console.log('service back before');
//     var criteria = {};
//     return MongoService.connect()
//         .then(db => {
//             const collection = db.collection('house');
//             return collection.find(criteria).toArray()
//         })
// }

function getHouseById(houseId) {
    houseId = new ObjectId(houseId)
    return MongoService.connect()
        .then(db => {
            const collection = db.collection('house');
            return collection.findOne({ _id: houseId })
        })
}

function getHouseByCity(city) {
    // houseId = new ObjectId(houseId)
    // var cityKey = txt.en.city;
    console.log('city in service back before', city);
    return MongoService.connect()
        .then(db => {
            const collection = db.collection('house');
            return collection.findOne({ 'txt.en.city': city })
        })
}

module.exports = {
    // getHouses,
    getHouseById,
    queryHouses,
    getHouseByCity
}