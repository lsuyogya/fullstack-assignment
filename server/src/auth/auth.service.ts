import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async register({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) {
    const userInDb = this.prisma.user.findFirst({
      where: { username: username },
    });
    if (userInDb != null) return 'User already exists';
    const user = { username, password };
    this.prisma.user.create({ data: user });
    return 'User Created';
  }
}
