
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {ingredient_name: 'Strawberry'},
    {ingredient_name: 'Raspberry'},
    {ingredient_name: 'Banana'},
    {ingredient_name: 'Milk'},
    {ingredient_name: 'Sugar'},
    {ingredient_name: 'Water'},
    {ingredient_name: 'Tomato Sauce'},
    {ingredient_name: 'Noodles'},
  ]);
};
