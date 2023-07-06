import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  providers: [UserService],
  exports: [UserService],
  imports: [PrismaModule],
})
export class UserModule {}
