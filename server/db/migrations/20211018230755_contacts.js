exports.up = (knex) => {
  return knex.schema.createTable('contacts', table => {
      table.increments('id').primary()
      table.integer('user_id').references('users.id')
      table.string('name')
      table.string('email')
      table.integer('phone')
      table.integer('birthdate')
      table.integer('last_chat')
      table.string('notes')
  })
};

exports.down = (knex) => {
    return knex.schema.dropTable('contacts')
};
