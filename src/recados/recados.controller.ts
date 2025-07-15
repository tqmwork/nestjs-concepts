import { Controller } from '@nestjs/common';

@Controller('recados')
export class RecadosController {
    // Find all recados
    findAll() {
        return 'This route will return all recados';
    }
    // Find one recado by ID
    findOne() {
        return 'This route will return a specific recado by ID';
    }
