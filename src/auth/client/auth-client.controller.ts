import {
  Controller,
  Post,
  UnauthorizedException,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthClientService } from './auth-client.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth-client')
export class AuthClientController {
  constructor(private readonly authService: AuthClientService) {}

  @Post()
  @UseGuards(AuthGuard('BasicClientStrategy'))
  async companyLogin(@Request() req) {
    try {
      const admin = await this.authService.validateUser(
        req.user.email,
        req.user.password,
      );
      return { message: 'Login bem-sucedido', admin };
    } catch (error) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
  }
}
