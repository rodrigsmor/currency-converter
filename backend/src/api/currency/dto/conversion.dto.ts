export class ConversionDto {
  result: number;
  unit_value: number;

  constructor(result: number, unit_value: number) {
    this.result = result;
    this.unit_value = unit_value;
  }
}
