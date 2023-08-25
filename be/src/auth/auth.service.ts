import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthResponse, IJwtPayload } from '@saecom/types';
import { compare, hash } from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { RegisterDto, SignInDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(data: RegisterDto) {
    const hashedPass = await hash(data.password, 10);
    const user = await this.userService.createUser(
      data.name,
      data.email,
      hashedPass,
    );

    const payload: IJwtPayload = {
      sub: user._id.toString(),
      email: user.email,
    };

    const res: AuthResponse = {
      access_token: this.generateAccessToken(payload),
      display_name: user.name,
    };

    return res;
  }

  async signIn(data: SignInDto) {
    const user = await this.userService.findOne(data.email);

    if (!user) {
      throw new NotFoundException();
    }

    const matchingPwd = await compare(data.password, user.password);

    if (!matchingPwd) {
      throw new UnauthorizedException();
    }

    const payload: IJwtPayload = {
      sub: user._id.toString(),
      email: user.email,
    };

    const res: AuthResponse = {
      access_token: this.generateAccessToken(payload),
      display_name: user.name,
    };

    return res;
  }

  private generateAccessToken(payload: IJwtPayload) {
    return this.jwtService.sign(payload, {
      expiresIn: '7d',
    });
  }
}
