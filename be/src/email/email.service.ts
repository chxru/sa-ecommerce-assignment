import { Injectable } from '@nestjs/common';
import { ServerClient } from 'postmark';

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

  constructor() {
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
}
