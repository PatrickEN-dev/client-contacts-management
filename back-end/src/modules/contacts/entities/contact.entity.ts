export class Contact {
  readonly id: number;
  first_name: string;
  last_name: string;
  email: string;
  telephone: string;
  readonly createdAt: Date;
  userId: number;

  constructor() {
    this.createdAt = new Date();
  }
}
