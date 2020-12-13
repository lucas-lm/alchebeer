import recipes from '../../../../data/recipes.json'
import { items } from '../../../../data/ingredients.json'

export default async (req, res) => {
  const { query: { id } } = req
  const recipe = recipes.find(r => r.id === Number(id))
  const ingredients = items.filter(item => recipe.ingredients.includes(item.id))
  return res.json({ ...recipe, ingredients })
}
