import { PartialType } from '@nestjs/mapped-types';
import { CreateLivroDto } from './create-livro.dto';

export class UpdateLivroDto extends PartialType(CreateLivroDto) {
    titulo: string;
    autor: string;
    editora: string;
    anoLancamento: Int32Array;
    descricao: string;
}
