
exports.seed = function(knex) {
  return knex('steps_ingredients').insert([
    {quantity: 5, step_id: 1, ingredient_id: 6},
    {quantity: .25, step_id: 8, ingredient_id: 6},
    {quantity: 2, step_id: 6, ingredient_id: 5},
    {quantity: 3, step_id: 9, ingredient_id: 5},
    {quantity: 1.5, step_id: 4, ingredient_id: 4},
    {quantity: 1, step_id: 5, ingredient_id: 3},
    {quantity: 1, step_id: 8, ingredient_id: 3},
    {quantity: 10, step_id: 8, ingredient_id: 2},
    {quantity: 4, step_id: 5, ingredient_id: 1},
    {quantity: 3, step_id: 8, ingredient_id: 1},
    {quantity: 2, step_id: 3, ingredient_id: 7},
    {quantity: 0.5, step_id: 2, ingredient_id: 8},
  ]);
};
