import { Migration } from '@mikro-orm/migrations';

export class Migration20210207192826 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "todo" add column "completed" bool not null;');
  }

}
