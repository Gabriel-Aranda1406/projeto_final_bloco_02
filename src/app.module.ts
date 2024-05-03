import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rootroot', 
      database: 'db_farmacia_projeto_final_bloco_2',
      entities: [],
      synchronize: true,
      logging: true
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
