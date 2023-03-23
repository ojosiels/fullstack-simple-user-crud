import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";

import { Client } from "./client.entity";

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  phone: string;

  @ManyToOne(() => Client, (client) => client.contacts)
  client: Client;

  @CreateDateColumn()
  createdAt: Date;
}
