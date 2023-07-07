import { CartService } from './cart.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}
  @UseGuards(AuthGuard)
  @Get()
  viewCart(@Request() req) {
    this.cartService.viewCart({ userId: req.user.userId });
  }
}
