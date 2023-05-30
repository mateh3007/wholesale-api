import {
  Controller,
  Post,
  UseGuards,
  Request,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(AuthGuard('basic'))
  async login(@Request() req) {
    try {
      const admin = await this.authService.validateUser(
        req.user.cnpj,
        req.user.password,
      );
      // Aqui você pode gerar e retornar um token JWT se a autenticação for bem-sucedida
      return { message: 'Login bem-sucedido', admin };
    } catch (error) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
  }
}
