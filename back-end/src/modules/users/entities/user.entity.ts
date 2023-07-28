import { Exclude } from 'class-transformer';

export class User {
  readonly id: number;
  first_name: string;
  last_name: string;
  email: string;
  telephone: string;

  @Exclude()
  password: string;

  readonly createdAt: Date;

  constructor() {
    this.createdAt = new Date();
  }
}
