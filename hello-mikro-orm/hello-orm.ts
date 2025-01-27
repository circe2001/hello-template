import { MikroORM } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { Book } from './book.entity';

async function init() {
    const orm = await MikroORM.init({
        dbName: 'postgres',
        name: 'try',
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: '123456',
        driver: PostgreSqlDriver,
        entities: [Book],
        allowGlobalContext: true
    });
    return orm;
}

init().then( async (orm) => { 
    const thebook = await orm.em.findOne(Book, '2')
    console.log('书名:',thebook?.title)
})