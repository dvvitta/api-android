import { PartialType } from '@nestjs/mapped-types';
import { CreatePublisherDto } from './create-publishers.dto.js';

export class UpdatePublisherDto extends PartialType(CreatePublisherDto) {}