import { PartialType } from '@nestjs/mapped-types';
import { CreateShipmentDto } from './create-shipments.dto.js';

export class UpdateShipmentDto extends PartialType(CreateShipmentDto) {}