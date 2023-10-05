import { ApiProperty } from '@nestjs/swagger';

export class ConversionDto {
  @ApiProperty({
    example: 103.12,
    type: Number,
    description: 'The result of currency conversion',
  })
  result: number;

  @ApiProperty({
    example: 5.16,
    type: Number,
    description: 'The value equivalent to one unit of the converted currencies',
  })
  unit_value: number;

  constructor(result: number, unit_value: number) {
    this.result = result;
    this.unit_value = unit_value;
  }
}
