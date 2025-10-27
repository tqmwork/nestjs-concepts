import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateEmpresaDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(100)
    readonly nomeEmpresa: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(18)
    @MaxLength(18)
    readonly cnpj: string;

}
