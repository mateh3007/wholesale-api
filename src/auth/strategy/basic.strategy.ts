import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { BasicStrategy } from 'passport-http';
import { AuthService } from '../auth.service';

@Injectable()
export class BasicAuthStrategy extends PassportStrategy(BasicStrategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(cnpj: string, password: string) {
    const user = await this.authService.validateUser(cnpj, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
