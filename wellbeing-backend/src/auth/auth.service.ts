import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(email: string, password: string) {
    // TODO: récupérer user depuis DB
    const user = { id: 1, email: 'test@test.com', password_hash: await bcrypt.hash('123456', 10) };
    const isMatch = await bcrypt.compare(password, user.password_hash);
    return isMatch ? user : null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
