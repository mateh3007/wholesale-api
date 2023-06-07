import {
  Controller,
  Post,
  UseGuards,
  Request,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthCompanyService } from './auth-company.service';

@Controller('auth')
export class AuthCompanyController {
  constructor(private readonly authService: AuthCompanyService) {}

  @Post('companyLogin')
  @UseGuards(AuthGuard('BasicCompanyStrategy'))
  async companyLogin(@Request() req) {
    try {
      const admin = await this.authService.validateUser(
        req.user.cnpj,
        req.user.password,
      );
      return { message: 'Login bem-sucedido', admin };
    } catch (error) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
  }
}
