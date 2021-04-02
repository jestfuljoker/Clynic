import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateClinic1617322177724 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'clinics',
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
            name: 'cnpj',
            type: 'varchar(18)',
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
            name: 'specialty_id',
            type: 'uuid',
          },
          {
            name: 'service_id',
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
            name: 'fk_specialties',
            referencedTableName: 'specialties',
            referencedColumnNames: ['id'],
            columnNames: ['specialty_id'],
            onUpdate: 'CASCADE',
          },
          {
            name: 'fk_services',
            referencedTableName: 'services',
            referencedColumnNames: ['id'],
            columnNames: ['service_id'],
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
    await queryRunner.dropTable('clinics');
  }
}
