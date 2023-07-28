import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactsRepository } from './repositories/contact.repository';

@Injectable()
export class ContactsService {
  constructor(private ContactRepository: ContactsRepository) {}

  create(data: CreateContactDto, userId: number) {
    return this.ContactRepository.create(data, userId);
  }

  findAll() {
    return this.ContactRepository.findAll();
  }

  findByEmail(email: string) {
    const ContactEmail = this.ContactRepository.findByEmail(email);
    if (!ContactEmail) throw new NotFoundException('Contact not found');
    return ContactEmail;
  }

  findOne(id: number) {
    const findContact = this.ContactRepository.findone(id);
    if (!findContact) throw new NotFoundException('Contact not found');

    return findContact;
  }

  update(id: number, updateContactDto: UpdateContactDto) {
    const findContact = this.ContactRepository.findone(id);
    if (!findContact) throw new NotFoundException('Contact not found');
    return this.ContactRepository.update(id, updateContactDto);
  }

  remove(id: number) {
    const findContact = this.ContactRepository.findone(id);
    if (!findContact) throw new NotFoundException('Contact not found');
    return this.ContactRepository.delete(id);
  }
}
