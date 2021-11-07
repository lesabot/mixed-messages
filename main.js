const ingredientList = (num) => {
  const measures = ['C','T','t','dash']; // Consider making gloabls
  const volumes = ['1/4','1/2','1']      // But not worried about speed right now
  const ingredients = ['flour', 'sugar', 'milk', 'eggs', 'baking powder', 'cinnamon']
  const nIngredients = Math.ceil(ingredients.length*Math.random())
  let ingredientsArray = []
  for (let i = 0;i<nIngredients;i++){
    const ingredientIdx = Math.floor(ingredients.length*Math.random())
    const _ingredient = ingredients[ingredientIdx]
    ingredients.splice(ingredientIdx,1)
    const _volume = volumes[Math.floor(volumes.length*Math.random())]
    const _measure = measures[Math.floor(measures.length*Math.random())]
    ingredientsArray.push(`${_volume} ${_measure}: ${_ingredient}`)
  }
  return ingredientsArray
}
const recipeFactory = () => {
  return {
    ingredients : ingredientList(),
    print : function(){
      for (let i = 0;i<this.ingredients.length;i++){
        console.log(this.ingredients[i])
      }
    }
  }
}

recipe = recipeFactory()
recipe.print()
