
exports.up = function(knex) {
    return knex.schema
    .createTable('dishes', function(tbl) {
        //primary key
        tbl.increments();

        tbl.string('name', 128).notNullable().unique();
    })

    .createTable('recipes', function(tbl) {
        tbl.increments();

        tbl.string('name', 128).notNullable().unique();

        tbl
        .integer('dish_id')
        .unsigned()
        .references('id')
        .inTable('dishes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
    
    .createTable('ingredients', function(tbl) {
        tbl.increments();

        tbl.string('name', 128).notNullable();
    })

    .createTable('ingredient_recipe', function(tbl) {
        tbl.increments();
       
        tbl
        .integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

        tbl
        .integer('ingredient_id')
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })   
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('dishes')
        .dropTableIfExists('recipes')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('ingredient_recipe')
    ;
};
