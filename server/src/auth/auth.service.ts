import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

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
    if (userInDb == null) throw new UnauthorizedException();
    if (userInDb.password === password) {
      const payload = { sub: userInDb.userId, username: userInDb.username };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    }
  }
}
