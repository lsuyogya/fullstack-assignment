import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login') async login(): Promise<string> {
    return 'test';
  }
  @Post('register') register(
    @Body() body: { username: string; password: string },
  ): string {
    this.authService.register(body);
    return 'User Created';
  }
}
