import  mongoose  from 'mongoose';
// import _ from '../config/global.js'


let _ = {
    USER_MONGO : "root",
    PASSWORD_MONGO : "secret",
    SERVER_MONGO : "mongo",
    PORT_MONGO : "27017",
    DATABASE_NAME_MONGO : "test-ldc-labs",
    PRODUCTION : false
}

let _dbConnect ;

if(_.PRODUCTION == true ){
    _dbConnect = mongoose.connect(`mongodb+srv://${ _.USER_MONGO }:${ _.PASSWORD_MONGO }@${ _.SERVER_MONGO }/${ _.DATABASE_NAME_MONGO }?authSource=admin`, { useUnifiedTopology: true ,useNewUrlParser: true,  ssl: true, sslValidate: false });
}else{
    _dbConnect =  mongoose.connect(`mongodb://${ _.USER_MONGO }:${ _.PASSWORD_MONGO }@${ _.SERVER_MONGO }:${ _.PORT_MONGO }/${ _.DATABASE_NAME_MONGO }?authSource=admin`, { useUnifiedTopology: true ,useNewUrlParser: true });
}

export default _dbConnect;
