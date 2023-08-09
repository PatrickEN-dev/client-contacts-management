import { CreateContactDto } from '../dto/create-contact.dto';
import { UpdateContactDto } from '../dto/update-contact.dto';
import { Contact } from '../entities/contact.entity';

export abstract class ContactsRepository {
  abstract create(data: CreateContactDto, userId: number): Promise<Contact>;
  abstract findAll(): Promise<Contact[]>;
  abstract findOne(id: number): Promise<Contact>;
  abstract findByEmail(
    email: string,
  ): Promise<Contact | undefined> | Contact | undefined;
  abstract update(
    id: number,
    data: UpdateContactDto,
  ): Promise<Contact> | Contact;
  abstract delete(id: number): Promise<void> | void;
}
