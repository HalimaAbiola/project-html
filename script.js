//object to store food items and their ingredients
const foodIngredients={
    meatPie: ['Minced Beef','Potatoes','Carrots','Onions','Cornflour','Butter','Egg','Plain Flour'],
    puffPuff:['Flour','Sugar','Yeast','Salt','Nutmeg','Lukewarm water'],
    jollofRice:['Rice','Tomato paste','Fresh tomatoes','Redbell Pepper','Onions','Garlic','Ginger','Bayleaves'],
    friedRice:['Rice','Mixed Vegetables','Bell-Peppers','Onions','Garlic','Ginger',]
};
//select all food items and query image container
const foodItems=document.querySelectorAll('.food-item');
const ingredientsDiv=document.getElementById('ingredients');
//function display food item when item is clicked
foodItems.forEach(item=>{
    item.addEventListener('click',()=>{
        //get food name form data-food attribute
        const foodName=item.getAttribute('data-food')
        //retrieve ingredieint for the selected food attribute
        const ingredients=foodIngredients[foodName];
        //display ingredients in ingredientsdiv
        ingredientsDiv.innerHTML=`<h3>Ingredients for ${foodName}:</h3><ul>`+
        ingredients.map(ingredients =>`<li>${ingredients}</li>`).join('')+
        `</ul>`;
        //show the ingredientsDiv
        ingredientsDiv.style.display='block';
    });
});






//select form from where ingredients will be displayed//
const form=document.getElementById('ingredient-form');
const ingredientFieldsContainer=document.getElementById('ingredient-fields');
const ingredientsDisplay=document.getElementById('ingredients-display');
//function to add more ingreident fields
function addIngredientField(){
    const newField=document.createElement('div');
    newField.classList.add('ingredient');
//create ingredient input
    const ingredientInput= document.createElement=('input')
    ingredientInput.type='text'
    ingredientInput.name='ingredient[meat-pie]';
    ingredientInput.placeholder='ingredient';
    ingredientInput.required= true;
//append input to new div
newField.addeEventListener('submit',function(event){
    event.preventDefault();
//clear current ingredient display
ingredientsDisplay.innerHTML=''
//get all ingredients
const ingredient =document.querySelectorAll('input[name="ingredient[]"]');
//LOOP through ingredients and display them
ingredient.forEach((ingredientInput,index) =>{
    const ingredient =ingredientInput.valueOf;
//create a list of ingredient for each iotem
const listItem= document.creatElement('li')
listItem.textContent=`${ingredient}:`;
//add the list otem to display area
ingredientsDisplay.appendChild(listItem)
});
//optionally ,reset the form after sumbmission
form.reset();
})



}
