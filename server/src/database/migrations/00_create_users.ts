import Knex from 'knex';

export async function up(Knex: Knex) {
    return Knex.schema.createTable('users',table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('wpp').notNullable();
        table.string('bio').notNullable();

        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('auth')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    });
}

export async function down (knex: Knex) {
    return knex.schema.dropTable('users');
}