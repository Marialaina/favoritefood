const router = require("express").Router()
//IMPORTING BCRYPT
const bcrypt = require("bcryptjs");
//IMPORTING MY MONGO DATABASE! :)
const Meal = require(`../models/Meal`);


//HOME PAGE aka INDEX aka MAIN PAGE
router.get(`/meals`, (req, res) => {
    Meal.find({}, (error, allMeals) => {
        res.render(`index`, {
            meals: allMeals
        });
    });
});

//NEW
router.get(`/meals/new`, (req, res) => {
    res.render(`new`)
});

//DELETE
router.delete(`/meals/:id`, (req, res) => {
    Meal.findByIdAndDelete(req.params.id, (error, data) => {
        res.redirect(`/meals`);
    });
});

//UPDATE
router.put(`/meals/:id`, (req, res) => {
    if(req.body.cookedDish === `on`){
        req.body.cookedDish = true;
    } else {
        req.body.cookedDish = false;
    }
    Meal.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedModel) => {
        res.redirect("/meals")
    })
})

//CREATE 
router.post(`/meals`, (req, res) => {
    if (req.body.cookedDish === `on`) {
        req.body.cookedDish = true;
    } else {
        req.body.cookedDish = false;
    }
    Meal.create(req.body, (error, createdMeal) => {
        console.log(req.body);
        res.redirect(`/meals`)
    })
})
//EDIT
router.get(`/meals/:id/edit`, (req, res) => {
    Meal.findById(req.params.id, (error, foundMeal) => {
        res.render(`edit`, {
            meal: foundMeal,
        })
    })
})

//SHOW
router.get(`/meals/:id`, (req, res) => {
    Meal.findById(req.params.id, (error, foundMeal) => {
        res.render(`show`, { meal: foundMeal });
    });
});


module.exports = router