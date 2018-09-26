const HouseService = require('../Services/HouseService')

module.exports = (app) => {

    app.get('/house', (req, res) => {
        HouseService.queryHouses(req.query.city, req.query.category)
            .then(houses => {
                console.log('houses in router back ', houses);   
                res.json(houses)
            })
        // HouseService.queryHouses()
        // .then(houses => res.json(houses))
    })

    // app.get('/house', (req, res) => {
    //     console.log('router back');        
    //     HouseService.getHouses()
    //         .then(houses => res.json(houses))
    // })
    
    app.get('/house/:houseId', (req, res) => {
        const houseId = req.params.houseId;
        
        HouseService.getHouseById(houseId)
        .then(house => {
            // console.log('house??', house);
            res.json(house)
        })
    })

    app.get('/house/gallery/:city', (req, res) => {
        console.log('req.params in route', req.params);
        const city = req.params.city;
        
        HouseService.getHouseByCity(city)
        .then(house => {
            console.log('house in route from back server', house);
            res.json(house)
        })
    })
    
}