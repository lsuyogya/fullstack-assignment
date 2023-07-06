import { PrismaService } from 'src/database/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}
  async getBooks() {
    return this.prisma.book.findMany();
  }

  async searchBooks({ title }: { title: string }) {
    return await this.prisma.book.findMany({
      where: {
        title: {
          contains: title,
        },
      },
    });
  }
}
