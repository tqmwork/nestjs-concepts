import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecadosModule } from 'src/recados/recados.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrismaModule } from '../prisma/prisma.module'; // ← Novo import

@Module({
  imports: [
    // Mantém o TypeORM durante a migração
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'recados123',
      password: 'recados123',
      database: 'recadosdb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      logging: true,
      autoLoadEntities: true,
      synchronize: true, // nunca usar em produção
    }),
    
    // Adiciona o PrismaModule
    PrismaModule,
    
    RecadosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
