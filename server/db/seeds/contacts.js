exports.seed = (knex) => {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([
        { id: 0, name: 'John', email: 'Johnny@john.com', password_hash: 'SomethingsomethingsomethingNOTAREALHASH' }
      ]);
    });
};
