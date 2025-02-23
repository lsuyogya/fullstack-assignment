import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login') async login(
    @Body() body: { username: string; password: string },
  ): Promise<string> {
    return this.authService.login(body);
  }

  @Post('register') register(
    @Body() body: { username: string; password: string },
  ): Promise<string> {
    return this.authService.register(body);
  }
  @UseGuards(AuthGuard)
  @Get('checkToken')
  checkToken() {
    return 'Token is valid';
  }
}
