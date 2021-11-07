const ingredientList = () => {
  const measures = ['C','T','t','dash']; // Consider making gloabls
  const volumes = ['1/4','1/2','1']      // But not worried about speed right now
  const ingredients = ['flour', 'sugar', 'milk', 'eggs', 'baking powder', 'cinnamon']
  const nIngredients = Math.ceil(ingredients.length*Math.random()) // Use some of the ingredients
  let ingredientsArray = []
  for (let i = 0;i<nIngredients;i++){
    // Select an ingredient and then remove it from the list so that we
    // don't add the same ingredient multiple times
    const ingredientIdx = Math.floor(ingredients.length*Math.random())
    const _ingredient = ingredients[ingredientIdx]
    ingredients.splice(ingredientIdx,1)

    const _volume = volumes[Math.floor(volumes.length*Math.random())]
    const _measure = measures[Math.floor(measures.length*Math.random())]

    // Nicely format the string and add it to the array
    ingredientsArray.push(`${_volume} ${_measure}: ${_ingredient}`)
  }
  return ingredientsArray
}
const recipeFactory = () => {
  return {
    ingredients : ingredientList(),
    print : function(){ // Simply diplay functionality
      for (let i = 0;i<this.ingredients.length;i++){
        console.log(this.ingredients[i])
      }
    }
  }
}

recipe = recipeFactory()
recipe.print()
