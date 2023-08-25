import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthResponse, IJwtPayload } from '@saecom/types';
import { compare, hash } from 'bcrypt';
import { nanoid } from 'nanoid';
import { EmailService } from 'src/email/email.service';
import { UsersService } from 'src/users/users.service';
import { RegisterDto, SignInDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private emailService: EmailService,
  ) {}

  async register(data: RegisterDto) {
    const hashedPass = await hash(data.password, 10);

    // Generate a random verification code
    const verificationCode = nanoid(32);

    const user = await this.userService.createUser(
      data.name,
      data.email,
      hashedPass,
      verificationCode,
    );

    const payload: IJwtPayload = {
      sub: user._id.toString(),
      email: user.email,
    };

    const res: AuthResponse = {
      access_token: this.generateAccessToken(payload),
      display_name: user.name,
      email_verified: false,
    };

    this.emailService.sendEmail({
      from: 'hello@truesigndev.one',
      to: user.email,
      subject: 'Welcome to SAECOM',
      html: `
        <h1>Welcome to SAECOM</h1>
        <p>Click <a href="http://localhost:3000/verify?code=${verificationCode}">here</a> to verify your account.</p>
      `,
      text: `Welcome to SAECOM. Click here to verify your account: http://localhost:3000/verify?code=${verificationCode}`,
    });

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
      email_verified: user.emailVerified,
    };

    return res;
  }

  private generateAccessToken(payload: IJwtPayload) {
    return this.jwtService.sign(payload, {
      expiresIn: '7d',
    });
  }
}
