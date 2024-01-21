import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { FarmFieldEntity } from './farm-field.entity';
import { IsString, IsNotEmpty } from 'class-validator';

@Entity('culture_type')
export class CultureTypeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  @IsString()
  @IsNotEmpty()
  name: string;

  @OneToMany(() => FarmFieldEntity, farmField => farmField.cultureType)
  farmFields: FarmFieldEntity[];
}
