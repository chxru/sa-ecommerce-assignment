import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IJwtPayload } from '@saecom/types';
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

    return {
      access_token: this.jwtService.sign(payload),
      id: user._id,
      email: user.email,
    };
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

    return {
      access_token: this.jwtService.sign(payload),
      id: user._id,
      email: user.email,
    };
  }
}
