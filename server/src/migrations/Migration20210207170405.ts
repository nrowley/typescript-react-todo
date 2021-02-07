import { Migration } from '@mikro-orm/migrations';

export class Migration20210207170405 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "todo" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" text not null);');
  }

}
