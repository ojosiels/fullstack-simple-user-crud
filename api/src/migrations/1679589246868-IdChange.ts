import { MigrationInterface, QueryRunner } from "typeorm";

export class IdChange1679589246868 implements MigrationInterface {
    name = 'IdChange1679589246868'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_clients" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "phone" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), CONSTRAINT "UQ_aa22377d7d3e794ae4cd39cd9e5" UNIQUE ("phone"), CONSTRAINT "UQ_b48860677afe62cd96e12659482" UNIQUE ("email"))`);
        await queryRunner.query(`INSERT INTO "temporary_clients"("id", "name", "email", "phone", "createdAt") SELECT "id", "name", "email", "phone", "createdAt" FROM "clients"`);
        await queryRunner.query(`DROP TABLE "clients"`);
        await queryRunner.query(`ALTER TABLE "temporary_clients" RENAME TO "clients"`);
        await queryRunner.query(`CREATE TABLE "temporary_contacts" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "phone" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "clientId" varchar, CONSTRAINT "UQ_84cae51c485079bdd8cdf1d828f" UNIQUE ("phone"), CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email"))`);
        await queryRunner.query(`INSERT INTO "temporary_contacts"("id", "name", "email", "phone", "createdAt", "clientId") SELECT "id", "name", "email", "phone", "createdAt", "clientId" FROM "contacts"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
        await queryRunner.query(`ALTER TABLE "temporary_contacts" RENAME TO "contacts"`);
        await queryRunner.query(`CREATE TABLE "temporary_contacts" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "phone" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "clientId" integer, CONSTRAINT "UQ_84cae51c485079bdd8cdf1d828f" UNIQUE ("phone"), CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email"))`);
        await queryRunner.query(`INSERT INTO "temporary_contacts"("id", "name", "email", "phone", "createdAt", "clientId") SELECT "id", "name", "email", "phone", "createdAt", "clientId" FROM "contacts"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
        await queryRunner.query(`ALTER TABLE "temporary_contacts" RENAME TO "contacts"`);
        await queryRunner.query(`CREATE TABLE "temporary_clients" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "phone" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), CONSTRAINT "UQ_aa22377d7d3e794ae4cd39cd9e5" UNIQUE ("phone"), CONSTRAINT "UQ_b48860677afe62cd96e12659482" UNIQUE ("email"))`);
        await queryRunner.query(`INSERT INTO "temporary_clients"("id", "name", "email", "phone", "createdAt") SELECT "id", "name", "email", "phone", "createdAt" FROM "clients"`);
        await queryRunner.query(`DROP TABLE "clients"`);
        await queryRunner.query(`ALTER TABLE "temporary_clients" RENAME TO "clients"`);
        await queryRunner.query(`CREATE TABLE "temporary_contacts" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "phone" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "clientId" integer, CONSTRAINT "UQ_84cae51c485079bdd8cdf1d828f" UNIQUE ("phone"), CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email"), CONSTRAINT "FK_8039454fab552403d5579cf7423" FOREIGN KEY ("clientId") REFERENCES "clients" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_contacts"("id", "name", "email", "phone", "createdAt", "clientId") SELECT "id", "name", "email", "phone", "createdAt", "clientId" FROM "contacts"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
        await queryRunner.query(`ALTER TABLE "temporary_contacts" RENAME TO "contacts"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" RENAME TO "temporary_contacts"`);
        await queryRunner.query(`CREATE TABLE "contacts" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "phone" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "clientId" integer, CONSTRAINT "UQ_84cae51c485079bdd8cdf1d828f" UNIQUE ("phone"), CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email"))`);
        await queryRunner.query(`INSERT INTO "contacts"("id", "name", "email", "phone", "createdAt", "clientId") SELECT "id", "name", "email", "phone", "createdAt", "clientId" FROM "temporary_contacts"`);
        await queryRunner.query(`DROP TABLE "temporary_contacts"`);
        await queryRunner.query(`ALTER TABLE "clients" RENAME TO "temporary_clients"`);
        await queryRunner.query(`CREATE TABLE "clients" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "phone" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), CONSTRAINT "UQ_aa22377d7d3e794ae4cd39cd9e5" UNIQUE ("phone"), CONSTRAINT "UQ_b48860677afe62cd96e12659482" UNIQUE ("email"))`);
        await queryRunner.query(`INSERT INTO "clients"("id", "name", "email", "phone", "createdAt") SELECT "id", "name", "email", "phone", "createdAt" FROM "temporary_clients"`);
        await queryRunner.query(`DROP TABLE "temporary_clients"`);
        await queryRunner.query(`ALTER TABLE "contacts" RENAME TO "temporary_contacts"`);
        await queryRunner.query(`CREATE TABLE "contacts" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "phone" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "clientId" varchar, CONSTRAINT "UQ_84cae51c485079bdd8cdf1d828f" UNIQUE ("phone"), CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email"))`);
        await queryRunner.query(`INSERT INTO "contacts"("id", "name", "email", "phone", "createdAt", "clientId") SELECT "id", "name", "email", "phone", "createdAt", "clientId" FROM "temporary_contacts"`);
        await queryRunner.query(`DROP TABLE "temporary_contacts"`);
        await queryRunner.query(`ALTER TABLE "contacts" RENAME TO "temporary_contacts"`);
        await queryRunner.query(`CREATE TABLE "contacts" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "phone" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "clientId" varchar, CONSTRAINT "UQ_84cae51c485079bdd8cdf1d828f" UNIQUE ("phone"), CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email"), CONSTRAINT "FK_8039454fab552403d5579cf7423" FOREIGN KEY ("clientId") REFERENCES "clients" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "contacts"("id", "name", "email", "phone", "createdAt", "clientId") SELECT "id", "name", "email", "phone", "createdAt", "clientId" FROM "temporary_contacts"`);
        await queryRunner.query(`DROP TABLE "temporary_contacts"`);
        await queryRunner.query(`ALTER TABLE "clients" RENAME TO "temporary_clients"`);
        await queryRunner.query(`CREATE TABLE "clients" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "phone" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), CONSTRAINT "UQ_aa22377d7d3e794ae4cd39cd9e5" UNIQUE ("phone"), CONSTRAINT "UQ_b48860677afe62cd96e12659482" UNIQUE ("email"))`);
        await queryRunner.query(`INSERT INTO "clients"("id", "name", "email", "phone", "createdAt") SELECT "id", "name", "email", "phone", "createdAt" FROM "temporary_clients"`);
        await queryRunner.query(`DROP TABLE "temporary_clients"`);
    }

}
