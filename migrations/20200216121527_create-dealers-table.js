
exports.up = function (knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments()
        tbl.text('make', 128)
            .notNullable()
            tbl.text('model', 128)
            .notNullable()
            tbl.integer('vin')
            .unique()
            .notNullable()
            tbl.integer('mileage')
            .notNullable()
            tbl.text('status')
            tbl.text('transmission')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cars')
};
