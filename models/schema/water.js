const mongoose = require('../../libs/dbInit');
const Schema = mongoose.Schema;

const WaterSchema = new Schema({
    id: Schema.Types.ObjectId,
    img: String,
    name: String,
    price: Number,
    size: String,
});

mongoose.model('users', WaterSchema); // Разные коллекции
module.exports = mongoose.model('users');