
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').insert([
    { name: 'Pepperoni Pizza' },
    { name: 'Southwest Tacos' },
    { name: 'Fettucini Pasta' }
  ])
};
