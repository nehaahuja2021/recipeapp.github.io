// FRONT END FILE TO INTERACT WITH THE DOM
const addRecipeBtn = document.querySelector('#btn-agregar');
const list = document.querySelector('#lista');


const addToDB = (input) => {
   fetch('api/addToDB', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(input)
   })
      .then(response => response.json())
      .then(data => {
         console.log('Success: ', data)
      })
      .catch((error) => {
         console.error('Error: ', error)
      })
}

addRecipeBtn.addEventListener('click', () => {

   let recipeName = document.getElementById('tareaInput').value
   console.log("FrontEnd recipeName: ", recipeName);
   let recipe = document.getElementById('tareaInput1').value
   console.log("FrontEnd recipe: ", recipe);
   addToDB({ title: recipeName, content: recipe })
   alert(" Recipe Added");
   //console.log("Calling fetch functionality");
   //loadRecipes();
   let newRecipefromFE =
      `<li class="recipes"><a class="title" id="title1" href="#">${recipeName}</a>
      <a class="content" id="content1" href="#">${recipe}</a></li>`



   list.insertAdjacentHTML('beforeend', newRecipefromFE)
   //update()

});
//////////Second Feature-LOAD////////



const loadRecipes = () => {
   fetch('api/Recipes', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      }
   })
      .then(response => response.json())
      .then(data => {
         console.log('Success:', data.recipes);
         //newTask.innerHTML = ""
         addRecipes(data.recipes)
         // console.log(data)

      })
      .catch((error) => {
         console.error('Error: ', error)
      })
}
loadRecipes();
const addRecipes = (add) => {

   add.forEach(el => {
      console.log(el.title);
      console.log(el.content);
      let listCard = `<li class="recipes"><a class="title" id="title1" href="#">${el.title}</a>
      <a class="content" id="content1" href="#">${el.content}</a></li>`

      list.insertAdjacentHTML('beforeend', listCard);
   });

}
////////////////////////////////////////





