
exports.up = async function(knex) {
  await knex.schema
    .createTable('recipes', table => {
        table.increments('recipe_id')
        table.string('recipe_name', 500).notNullable()
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
    })
    .createTable('steps', table => {
        table.increments('step_id')
        table.integer('step_number').notNullable()
        table.string('step_instructions', 128).notNullable()

        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
    .createTable('ingredients', table => {
        table.increments('ingredient_id')
        table.string('ingredient_name', 128).notNullable()
    })
    .createTable('steps_ingredients', table => {
        table.increments('quantity_id')
        table.decimal('quantity').notNullable()

        table.integer('step_id')
            .unsigned()
            .notNullable()
            .references('step_id')
            .inTable('steps')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')

        table.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredient_id')
            .inTable('ingredients')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('steps_ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};
