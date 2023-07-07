import { PrismaService } from 'src/database/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  async viewCart({ userId }) {
    return await this.prisma.cart.findUnique({
      where: { userId: userId },
      include: { books: true },
    });
  }

  async addToCart({ userId, bookId }) {
    return await this.prisma.cart.update({
      where: { userId: userId },
      data: {
        books: {
          connect: {
            bookId: bookId,
          },
        },
      },
    });
  }

  async delFromCart({ userId, bookId }) {
    return await this.prisma.cart.update({
      where: { userId: userId },
      data: {
        books: {
          disconnect: {
            bookId: bookId,
          },
        },
      },
    });
  }
}
