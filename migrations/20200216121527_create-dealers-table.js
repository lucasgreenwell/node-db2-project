
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
    }).createTable('sales', tbl => {
        tbl.increments();
        tbl.text('emp', 128).notNullable()
        tbl.integer('car_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('cars')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('sales').dropTableIfExists('cars')
};
