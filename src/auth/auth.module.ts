import { JwtStrategy } from './../../../authenticate-with-nestjs/authenticate-with-nestjs/src/auth/strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthConfig } from './auth.config';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  providers: [AuthService, AuthConfig, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
