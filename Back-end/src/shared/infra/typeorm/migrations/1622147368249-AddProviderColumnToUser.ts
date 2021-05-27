import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddProviderColumnToUser1622147368249
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('users', [
      new TableColumn({
        name: 'provider',
        type: 'boolean',
        default: 'false',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns('users', [
      new TableColumn({
        name: 'provider',
        type: 'boolean',
      }),
    ]);
  }
}
