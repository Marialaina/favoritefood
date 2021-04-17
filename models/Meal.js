const {Schema, model} = require(`../db/connection`)

const MealsSchema = new Schema({
    name: String,
    img: String,
    ingredients: String,
    note: [String],
    cookedDish: Boolean,
    dayGoal: String
})

const Meal = model(`Meal`, MealsSchema)
console.log(Meal)

module.exports = Meal;