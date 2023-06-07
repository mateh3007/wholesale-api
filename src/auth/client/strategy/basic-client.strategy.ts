import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { BasicStrategy } from 'passport-http';
import { AuthClientService } from '../auth-client.service';

@Injectable()
export class BasicClientStrategy extends PassportStrategy(
  BasicStrategy,
  'BasicClientStrategy',
) {
  constructor(private readonly authService: AuthClientService) {
    super();
  }

  async validate(email: string, password: string) {
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
