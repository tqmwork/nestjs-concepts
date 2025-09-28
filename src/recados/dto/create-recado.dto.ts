import { IsNotEmpty, IsString, MaxLength, MinLength, IsBoolean, IsOptional, IsDate } from 'class-validator';

export class CreateRecadoDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(255) // Corrigido para 255
  readonly texto: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(50)
  readonly de: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(50)
  readonly para: string;

  @IsBoolean()
  @IsOptional()
  readonly lido?: boolean;

  @IsDate()
  @IsOptional()
  readonly data?: Date;
}
