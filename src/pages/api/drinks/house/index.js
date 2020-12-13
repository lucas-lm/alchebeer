import recipes from '../../../../data/recipes.json'

export default async (_req, res) => {
  return res.json(recipes)
}
