
exports.seed = function(knex) {
  return knex('steps').insert([
    {step_number: 1, step_instructions: 'Boil  5 cups of water', recipe_id: '1'},
    {step_number: 2, step_instructions: 'Put 0.5 pound of noodles in pot', recipe_id: '1'},
    {step_number: 3, step_instructions: 'Mix in 2 cups of tomato sauce', recipe_id: '1'},
    {step_number: 1, step_instructions: 'Pour 1.5 cups of milk', recipe_id: '2'},
    {step_number: 2, step_instructions: 'Cut one banana and get 4 strawberries', recipe_id: '2'},
    {step_number: 3, step_instructions: 'Pour diced fruits in blender and 2 tsp of sugar', recipe_id: '2'},
    {step_number: 4, step_instructions: 'Blend and serve', recipe_id: '2'},
    {step_number: 1, step_instructions: 'Cut one banana and get 10 raspberries and 3 strawberries', recipe_id: '3'},
    {step_number: 2, step_instructions: 'Throw them in the blender with 0.25 cup of water and 3 tsp of sugar', recipe_id: '3'},
    {step_number: 3, step_instructions: 'Blend and drink.', recipe_id: '3'}
  ]);
};
