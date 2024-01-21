import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { FarmFieldEntity } from './farm-field.entity';
import { IsInt, IsString, IsNotEmpty } from 'class-validator';

@Entity('planters')
export class PlantersEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Column({ length: 100 })
  @IsString()
  farmName: string;

  @Column({ length: 100 })
  @IsString()
  @IsNotEmpty()
  city: string;

  @Column({ length: 100 })
  @IsString()
  @IsNotEmpty()
  states: string;

  @Column({ type: 'int' })
  @IsInt()
  //@IsCPF()
  cpf: number;

  @Column({ type: 'int' })
  @IsInt()
  //@IsCNPJ()
  cnpj: number;

  @Column({ type: 'int' })
  @IsInt()
  agriculturalField: number;

  @Column({ type: 'int' })
  @IsInt()
  vegetationField: number;

  @Column({ type: 'int' })
  @IsInt()
  farmFieldTotal: number;

  @OneToMany(() => FarmFieldEntity, farmField => farmField.planter)
  farmFields: FarmFieldEntity[];
}
