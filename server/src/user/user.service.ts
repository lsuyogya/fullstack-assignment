import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

export type User = { userId: number; username: string; password: string };

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  private readonly users = [
    {
      userId: 1,
      username: 'user1',
      password: 'test123',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.prisma.user.findFirst({ where: { username: username } });
  }
}
