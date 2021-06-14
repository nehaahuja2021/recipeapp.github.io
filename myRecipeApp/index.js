// lib and imports
const express = require("express");
const app = express();

const recipe = require("./controllers/recipe")

// app setup
app.use(express.json())
app.use("/static", express.static("public"));
app.set("view engine", "ejs");


// pages
app.get('/', (req, res) => {
  // callback
  res.render('recipes.ejs');
});


// Create here your api setup
app.post('/api/addToDB', (req, res) => {
  console.log("indexjs working");

  console.log("req: ", req.body);
  recipe.addRecipeToDB(req.body);
  // console.log("Fetch recipes");
  // recipe.fetchAllRecipesFromDb(res);
})

app.post('/api/Recipes', (req, res) => {
  console.log("going to db to fetch recipes");
  recipe.fetchAllRecipesFromDb(res)
})

app.listen(7003, () => console.log("Server Up and running"));
