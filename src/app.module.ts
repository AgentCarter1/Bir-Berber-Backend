import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserModule } from './user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost:27017/birkuafordb', // MongoDB bağlantı URL'si
      synchronize: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      entities: [User], // Bu kısmı kendi entity dosyanıza göre güncelleyin
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
