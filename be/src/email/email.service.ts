import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ServerClient } from 'postmark';
import { VerifyEmailDto } from './email.dto';
import { UsersService } from 'src/users/users.service';
import { IReqUser } from 'src/auth/auth.guard';

interface SendEmailOptions {
  from: string;
  to: string;
  subject: string;
  html: string;
  text: string;
  messageStream?: string;
}

@Injectable()
export class EmailService {
  private client: ServerClient;

  constructor(private userService: UsersService) {
    this.client = new ServerClient(process.env.POSTMARK_API_KEY);
  }

  /**
   * Send an email using Postmark
   * @param options
   * @returns
   */
  async sendEmail(options: SendEmailOptions) {
    return this.client.sendEmail({
      From: options.from,
      To: options.to,
      Subject: options.subject,
      HtmlBody: options.html,
      TextBody: options.text,
      MessageStream: options.messageStream,
    });
  }

  async verifyEmail(verifyEmailDto: VerifyEmailDto, user: IReqUser) {
    if (!user && !user.id) {
      throw new UnauthorizedException('Request user does not exists');
    }

    // fetch user from database
    const userFromDb = await this.userService.findOneById(user.id);

    if (!userFromDb) {
      throw new UnauthorizedException('User not found');
    }

    // check if the verification code is correct
    if (userFromDb.emailVerificationCode !== verifyEmailDto.code) {
      throw new UnauthorizedException('Invalid verification code');
    }

    // update the user's email verification status
    userFromDb.emailVerified = true;

    // remove the verification code
    userFromDb.emailVerificationCode = undefined;

    await userFromDb.save();

    return true;
  }
}
