
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pass', table => {
      table.increments('id').primary()
      table.text('name')
      table.integer('elevation')
      table.text('county')
      table.text('openInWinter')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('pass')
};
