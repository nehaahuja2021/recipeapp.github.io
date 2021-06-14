const sqlite3 = require('sqlite3').verbose();

// BACKEND FILE FOR MY DATABASES QUERIES
const addRecipeToDB = (taskFromTheBrain) => {
   // code to add to the database
   console.log("From the server add data in db:", taskFromTheBrain);

   let db = new sqlite3.Database('./db/db.recipebook');

   // insert one row into the langs table
   db.run(`INSERT INTO recipes(title,content) VALUES(?, ?)`, [taskFromTheBrain.title, taskFromTheBrain.content], function (err) {
      if (err) {
         return console.log(err.message);
      }
      // get the last insert id
      console.log(`A row has been inserted with rowid ${this.lastID}`);
   });

   // close the database connection
   db.close();
}

/////////Load Recipes////////

const fetchAllRecipesFromDb = (res) => {
   let dataForTheUser = { recipes: [] }
   let db = new sqlite3.Database('./db/db.recipebook');

   let sql = `SELECT * FROM recipes`;

   db.all(sql, [], (err, rows) => {
      if (err) {
         throw err;
      }
      rows.forEach((row) => {
         console.log(row);
         dataForTheUser.recipes.push(row)
      });
      console.log(dataForTheUser)
      res.send(dataForTheUser)
   });

   // close the database connection
   db.close();
}

exports.addRecipeToDB = addRecipeToDB;
exports.fetchAllRecipesFromDb = fetchAllRecipesFromDb;
