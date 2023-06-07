import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { BasicStrategy } from 'passport-http';
import { AuthCompanyService } from '../auth-company.service';

@Injectable()
export class BasicCompanyStrategy extends PassportStrategy(
  BasicStrategy,
  'BasicCompanyStrategy',
) {
  constructor(private readonly authService: AuthCompanyService) {
    super();
  }

  async validate(cnpj: string, password: string) {
    console.log(cnpj);
    const user = await this.authService.validateUser(cnpj, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
