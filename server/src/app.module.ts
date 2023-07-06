import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { BookModule } from './book/book.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [AuthModule, UserModule, ConfigModule.forRoot(), BookModule, CartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
