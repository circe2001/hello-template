import { Injectable } from "@nestjs/common"
import { EntityManager } from "@mikro-orm/postgresql"
import { Book } from "./entity.book"

@Injectable()
export class AppService {
  constructor(private readonly em: EntityManager) {}

  getHello(): string {
    return "Hello World!"
  }

  async getBookName() {
    const thebook = await this.em.findOne(Book, "1")
    return thebook?.title
  }
}
