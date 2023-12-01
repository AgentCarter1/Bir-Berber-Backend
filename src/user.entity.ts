// your-entity.entity.ts

import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  username: string;
  
  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phoneNumber: string;

  // Daha fazla sütun ekleyebilirsiniz
}
