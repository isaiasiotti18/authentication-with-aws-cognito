import { AuthService } from './auth.service';
import { BadRequestException, Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() authenticateRequest: { name: string; password: string }) {
    try {
      return await this.authService.authenticateUser(authenticateRequest);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Post('register')
  async register(
    @Body() registerRequest: { name: string; password: string; email: string },
  ) {
    return await this.authService.registerUser(registerRequest);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('teste')
  getHello() {
    return 'Hello World!';
  }
}
