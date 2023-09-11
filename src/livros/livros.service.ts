import { Injectable } from '@nestjs/common';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { Repository } from 'typeorm';
import { Livro } from './entities/livro.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LivrosService {
  constructor(
    @InjectRepository(Livro)
    private readonly livrosRepository: Repository<Livro>,
  ){}

  create(createLivroDto: CreateLivroDto) {
    return this.livrosRepository.save(createLivroDto);
  }

  findAll() {
    return this.livrosRepository.find();
  }

  findOne(id: number) {
    return this.livrosRepository.findOne({ id: id });
  }

  update(id: number, updateLivroDto: UpdateLivroDto) {
    if(this.findOne(id)){
      this.livrosRepository.update(id, updateLivroDto);
      return 'atualizado com sucesso!';
    } else{
      return 'Erro ao atualizar!';
    }
  }

  remove(id: number) {
    if(this.livrosRepository.delete(id)){
      return 'Livro excluido com sucesso';
    } else{
      return 'Erro ao excluir livro!';
    }
  }
}
