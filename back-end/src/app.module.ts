import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ContactModule } from './modules/contacts/contacts.module';

@Module({
  imports: [UsersModule, ContactModule, AuthModule],
})
export class AppModule {}
