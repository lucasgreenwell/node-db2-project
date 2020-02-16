
exports.up = function (knex) {
    return knex.schema.createTable('car-dealers', tbl => {
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
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('car-dealers')
};
