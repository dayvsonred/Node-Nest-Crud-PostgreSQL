import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { PlantersEntity } from './planters.entity';
import { CultureTypeEntity } from './culture-type.entity';
import { IsInt } from 'class-validator';

@Entity('farm_field')
export class FarmFieldEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  @IsInt()
  agriculturalField: number;

  @Column({ type: 'int' })
  @IsInt()
  vegetationField: number;

  @Column({ type: 'int' })
  @IsInt()
  farmFieldTotal: number;

  @ManyToOne(() => PlantersEntity, planter => planter.farmFields)
  @JoinColumn({ name: 'planterId' })
  planter: PlantersEntity;

  @ManyToOne(() => CultureTypeEntity, cultureType => cultureType.farmFields)
  @JoinColumn({ name: 'cultureTypeId' })
  cultureType: CultureTypeEntity;
}
