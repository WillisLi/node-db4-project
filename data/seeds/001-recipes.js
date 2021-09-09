
exports.seed = function(knex) {
  return knex('recipes').insert([
    {recipe_name: 'Spaghetti'},
    {recipe_name: 'Smoothie'},
    {recipe_name: 'Fruit Juice'}
  ]);
};
