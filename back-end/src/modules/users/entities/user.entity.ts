import { Exclude } from 'class-transformer';
import { Contact } from 'src/modules/contacts/entities/contact.entity';

export class User {
  readonly id: number;
  first_name: string;
  last_name: string;
  email: string;
  telephone: string;

  @Exclude()
  password: string;

  readonly createdAt: Date;
}
