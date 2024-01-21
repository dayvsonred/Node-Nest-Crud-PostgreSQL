import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlantersEntity } from '../models/planters.entity';

@Injectable()
export class PlantersService {
  constructor(
    @InjectRepository(PlantersEntity)
    private readonly plantersRepository: Repository<PlantersEntity>,
  ) {}

  async getAllPlanters(): Promise<PlantersEntity[]> {
    return this.plantersRepository.find();
  }

  async getPlanterById(id: number): Promise<PlantersEntity> {
    const planter = await this.plantersRepository.findOneById(id);
    if (!planter) {
      throw new NotFoundException(`Planter with ID ${id} not found`);
    }
    return planter;
  }

  async createPlanter(planterData: PlantersEntity): Promise<PlantersEntity> {
    // Adicione a lógica para validar a soma de agriculturalField e vegetationField
    if (planterData.agriculturalField + planterData.vegetationField > planterData.farmFieldTotal) {
      throw new BadRequestException('The sum of agriculturalField and vegetationField cannot exceed farmFieldTotal');
    }

    const newPlanter = this.plantersRepository.create(planterData);
    return this.plantersRepository.save(newPlanter);
  }

  async updatePlanter(id: number, updatedPlanterData: Partial<PlantersEntity>): Promise<PlantersEntity> {
    const planter = await this.getPlanterById(id);

    // Adicione a lógica para validar a soma de agriculturalField e vegetationField
    if (
      updatedPlanterData.agriculturalField &&
      updatedPlanterData.vegetationField &&
      (updatedPlanterData.agriculturalField + updatedPlanterData.vegetationField > planter.farmFieldTotal)
    ) {
      throw new BadRequestException('The sum of agriculturalField and vegetationField cannot exceed farmFieldTotal');
    }

    this.plantersRepository.merge(planter, updatedPlanterData);
    return this.plantersRepository.save(planter);
  }

  async deletePlanter(id: number): Promise<void> {
    const planter = await this.getPlanterById(id);
    await this.plantersRepository.remove(planter);
  }
}