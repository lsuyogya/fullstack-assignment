import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  controllers: [BookController],
  providers: [BookService],
  imports: [PrismaModule],
})
export class BookModule {}
