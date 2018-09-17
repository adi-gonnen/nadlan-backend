var dbConn = null;

function connectToMongo() {
    // Reuse existing connection if exist
    if (dbConn) return Promise.resolve(dbConn);
    const MongoClient = require('mongodb').MongoClient;
    const url = 'mongodb://nadlani:nadlan1@ds259742.mlab.com:59742/nadlan';
    // const url = (!process.env.PORT)? 
    //         'mongodb://nadlani:nadlan1@ds259742.mlab.com:59742/nadlan': 'mlab url';
    return MongoClient.connect(url)
        .then(client => {
            // console.log('Connected to MongoDB');
            client.on('close', ()=>{
                // console.log('MongoDB Diconnected!');
                dbConn = null;
            })
            dbConn = client.db()
            return dbConn;
        })
}

module.exports = {
    connect : connectToMongo
}
