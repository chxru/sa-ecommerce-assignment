import { Body, Controller, Post, Request } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EmailService } from './email.service';
import { VerifyEmailDto } from './email.dto';

@ApiTags('email')
@Controller('email')
export class EmailController {
  constructor(private emailService: EmailService) {}

  @Post('verify')
  verifyEmail(@Body() verifyEmailDto: VerifyEmailDto, @Request() req) {
    return this.emailService.verifyEmail(verifyEmailDto, req.user);
  }
}
