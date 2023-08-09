import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactsRepository } from './repositories/contact.repository';

@Injectable()
export class ContactsService {
  constructor(private ContactRepository: ContactsRepository) {}

  async create(data: CreateContactDto, userId: number) {
    return await this.ContactRepository.create(data, userId);
  }

  async findAll() {
    return await this.ContactRepository.findAll();
  }

  async findByEmail(email: string) {
    const ContactEmail = await this.ContactRepository.findByEmail(email);
    if (!ContactEmail) throw new NotFoundException('Contact not found');
    return ContactEmail;
  }

  async findOne(id: number) {
    const findContact = await this.ContactRepository.findOne(id);
    if (!findContact) throw new NotFoundException('Contact not found');

    return findContact;
  }

  async update(id: number, updateContactDto: UpdateContactDto) {
    const findContact = await this.ContactRepository.findOne(id);
    if (!findContact) throw new NotFoundException('Contact not found');
    return this.ContactRepository.update(id, updateContactDto);
  }

  async remove(id: number) {
    const findContact = await this.ContactRepository.findOne(id);
    if (!findContact) throw new NotFoundException('Contact not found');
    return this.ContactRepository.delete(id);
  }
}
