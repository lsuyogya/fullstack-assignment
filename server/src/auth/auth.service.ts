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
  }): Promise<any> {
    const userInDb = this.prisma.user.findFirst({
      where: { username: username },
    });

    if ((await userInDb) != null) return Promise.reject('User already exists');
    const user = { username: username, password: password };
    return this.prisma.user.create({ data: user });
  }

  async login({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Promise<any> {
    const userInDb = await this.prisma.user.findFirst({
      where: { username: username },
    });
    if (userInDb == null) return Promise.reject('User does not exist');
    if (userInDb.password === password) {
      // return jwt
    }
  }
}
