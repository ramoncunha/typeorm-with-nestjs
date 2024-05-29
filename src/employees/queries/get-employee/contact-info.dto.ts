import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ContactInfoDto {
  @Expose()
  phone?: number;

  @Expose()
  email?: string;
}
