import { PrismaService } from 'src/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { Contact } from '../../entities/contact.entity';
import { UpdateContactDto } from '../../dto/update-contact.dto';

@Injectable()
export class ContactsPrismaRepository implements ContactsPrismaRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateContactDto, userId: number): Promise<Contact> {
    const contact = new Contact();
    Object.assign(contact, { ...data });

    const newContact = await this.prisma.contact.create({
      data: { ...contact, userId },
    });

    return plainToInstance(Contact, newContact);
  }

  async findAll(): Promise<Contact[]> {
    const contacts: Contact[] = await this.prisma.contact.findMany();
    return plainToInstance(Contact, contacts);
  }

  async findOne(id: number): Promise<Contact> {
    const contact = await this.prisma.contact.findFirst({ where: { id } });
    return contact;
  }

  async update(id: number, data: UpdateContactDto): Promise<Contact> {
    const contact = await this.prisma.contact.update({
      where: { id },
      data: { ...data },
    });

    return plainToInstance(Contact, contact);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.contact.delete({ where: { id } });
  }
}
