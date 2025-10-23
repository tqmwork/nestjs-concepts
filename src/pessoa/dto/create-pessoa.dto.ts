import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreatePessoaDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(100)
    readonly nome: string; 

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(100)
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(6)
    readonly senha: string;
}
