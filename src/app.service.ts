import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Employee } from './employees/entities/employee.entity';
import { ContactInfo } from './employees/entities/contact-info.entity';

@Injectable()
export class AppService {
  constructor(private readonly dataSource: DataSource) {}

  async seed() {
    await this.dataSource.transaction(async (db) => {
      const ceo = db.create(Employee, {
        name: 'Mr. CEO',
      });

      await db.save(ceo);

      const contactInfo = db.create(ContactInfo, {
        email: 'ceo@acme.com',
        employee: ceo,
      });

      await db.save(contactInfo);
    });
  }
}
