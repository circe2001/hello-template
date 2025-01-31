import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { MikroOrmModule } from "@mikro-orm/nestjs"
import { PostgreSqlDriver } from "@mikro-orm/postgresql"
import { Book } from "./entity.book"

@Module({
  imports: [
    MikroOrmModule.forRoot({
      dbName: "postgres",
      host: "localhost",
      port: 5432,
      user: "postgres",
      password: "123456",
      driver: PostgreSqlDriver,
      entities: [Book],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
