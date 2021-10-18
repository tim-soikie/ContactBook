exports.seed = (knex) => {
  return knex('contacts').del()
    .then(() => {
      return knex('contacts').insert([
        { id: 0, user_id: 0, name: 'Jane', email:'Janey@john.com', phone: 02102256231, birthdate: 19850314, last_chat: 20211016, notes: "My Wife" }
      ]);
    });
};
