// your-entity.entity.ts

import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  id: string;

  @Column()
  fieldName: string;

  // Daha fazla sütun ekleyebilirsiniz
}
