import Knex from 'knex'

export async function up (Knex: Knex) {
    return Knex.schema.createTable('auth', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('avatarLink');
        table.string('wpp');
        table.specificType('activityArray', 'integer ARRAY')
    })
}

export async function down (knex: Knex) {
    return knex.schema.dropTable('auth');
}