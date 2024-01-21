import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { PlantersService } from '../service/planters.service';
import { PlantersEntity } from '../models/planters.entity';

@Controller('planters')
export class PlantersController {
  constructor(private readonly plantersService: PlantersService) {}

  @Get()
  getAllPlanters(): Promise<PlantersEntity[]> {
    return this.plantersService.getAllPlanters();
  }

  @Get(':id')
  getPlanterById(@Param('id') id: number): Promise<PlantersEntity> {
    return this.plantersService.getPlanterById(id);
  }

  @Post()
  createPlanter(@Body() planterData: PlantersEntity): Promise<PlantersEntity> {
    return this.plantersService.createPlanter(planterData);
  }

  @Put(':id')
  updatePlanter(@Param('id') id: number, @Body() updatedPlanterData: Partial<PlantersEntity>): Promise<PlantersEntity> {
    return this.plantersService.updatePlanter(id, updatedPlanterData);
  }

  @Delete(':id')
  deletePlanter(@Param('id') id: number): Promise<void> {
    return this.plantersService.deletePlanter(id);
  }
}
