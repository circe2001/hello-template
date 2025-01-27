import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Book {

  @PrimaryKey()
  id!: string;

  @Property()
  title!: string;

  @Property()
  author!: string;
}