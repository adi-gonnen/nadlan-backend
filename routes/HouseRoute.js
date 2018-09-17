const HouseService = require('../services/HouseService')

module.exports = (app) => {

    app.get('/house', (req, res) => {
        console.log('router back');        
        HouseService.getHouses()
            .then(houses => res.json(houses))
    })
    
    app.get('/house/:houseId', (req, res) => {
        const houseId = req.params.houseId;
        
        HouseService.getHouseById(houseId)
        .then(house => {
            // console.log('house??', house);
            res.json(house)
        })
    })
    
}