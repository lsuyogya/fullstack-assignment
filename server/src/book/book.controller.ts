import { BookService } from './book.service';
import { AuthGuard } from './../auth/auth.guard';
import { Controller, Get, Post, UseGuards, Body } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Controller('book')
export class BookController {
  constructor(
    private prisma: PrismaService,
    private bookService: BookService,
  ) {}

  @UseGuards(AuthGuard)
  @Get()
  getAllBooks() {
    return this.prisma.book.findMany();
  }

  @UseGuards(AuthGuard)
  @Post('search')
  searchBook(@Body() body: { title: string }) {
    return this.bookService.searchBooks({ title: body.title });
  }
}
