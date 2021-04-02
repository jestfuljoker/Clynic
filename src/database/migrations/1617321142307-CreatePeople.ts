import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreatePeople1617321142307 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'peoples',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'cpf',
            type: 'varchar(14)',
            isNullable: false,
          },
          {
            name: 'date_of_birth',
            type: 'timestamp with time zone',
            isNullable: false,
          },
          {
            name: 'user_id',
            type: 'uuid',
          },
          {
            name: 'adress_id',
            type: 'uuid',
          },
          {
            name: 'state_id',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_users',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_id'],
            onUpdate: 'CASCADE',
          },
          {
            name: 'fk_adresses',
            referencedTableName: 'adresses',
            referencedColumnNames: ['id'],
            columnNames: ['adress_id'],
            onUpdate: 'CASCADE',
          },
          {
            name: 'fk_states',
            referencedTableName: 'states',
            referencedColumnNames: ['id'],
            columnNames: ['state_id'],
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('peoples');
  }
}
