const mongoose = require("mongoose");

const pizzaSchema = new mongoose.Schema({
    name: {type: String},
    img: {type: String},
    base: {type: String},
    topping: {type: String},
    price: {type: String},
});

module.exports = mongoose.model("Pizza", pizzaSchema, "pizza");