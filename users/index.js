import app from './app.js'
import _dbConnect from './src/connectors/mongo.js'

_dbConnect.then(() => {
    console.log('MongoDB Connected');
    app.listen(3000);
});