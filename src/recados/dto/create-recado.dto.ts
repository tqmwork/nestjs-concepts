import { IsNotEmpty, IsString, MaxLength, MinLength, IsBoolean, IsOptional, IsDate, IsNumber } from 'class-validator';

export class CreateRecadoDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(255) // Corrigido para 255
  readonly texto: string;

  @IsNumber()
  @IsNotEmpty()
  readonly deId: number;

  @IsNumber()
  @IsNotEmpty()
  readonly paraId: number;

  @IsBoolean()
  @IsOptional()
  readonly lido?: boolean;

  @IsDate()
  @IsOptional()
  readonly data?: Date;
}
