
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { make: 'rowValue1', model: 'Kim', vin: 47, mileage: 43, status: 'made out of puppies', transmission: 'real'},
        { make: 'dodge', model: 'fakedata', vin: 4397, mileage: 43, status: 'made out of chocalate', transmission: 'fake'},
        { make: 'ram', model: 'fakedata', vin: 43932097, mileage: 43, status: 'all out of chocalate', transmission: 'manual'}
      ]);
    });
};
