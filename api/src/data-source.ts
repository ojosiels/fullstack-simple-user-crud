import { DataSource } from "typeorm";
import path from "path";
import { Client } from "./entities/client.entity";
import { Contact } from "./entities/contact.entity";

import { InitialMigration1679507363310 } from "./migrations/1679507363310-InitialMigration";
import { IdChange1679589246868 } from "./migrations/1679589246868-IdChange";

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "db.sqlite3",
  logging: true,
  synchronize: false,
  entities: [Client, Contact],
  migrations: [InitialMigration1679507363310, IdChange1679589246868],
});

export default AppDataSource;
