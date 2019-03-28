
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').insert([
    { name: 'Flour' },
    { name: 'Sugar' },
    { name: 'Salt' }
  ])
};
