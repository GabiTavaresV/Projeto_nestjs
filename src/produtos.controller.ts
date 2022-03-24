import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Produto} from './produto.models'

@Controller('produtos')
export class ProdutosController {
  produtos: Produto[] = [
    new Produto('Livro1', 'O Poder do habito', 30.86),
    new Produto('Livro2', 'O Poder do agora', 57.9),
    new Produto('Livro1', 'O Poder do planejamento', 25.75),
  ];
  @Get()
  obterTodos(): Produto[] {
    return this.produtos;
  }

  @Get(':id')
  obterUm(@Param() params): string {
    return `Retorna os dados do produto ${params.id}`;
  }

  @Post()
  criar(@Body() produto): string {
    console.log(produto);
    return 'Produto criado';
  }

  @Put()
  alterar(@Body() produto): string {
    console.log(produto);
    return 'Produto atualizado';
  }

  @Delete(':id')
  apagar(@Param() params): string {
    return `Apaga o produto ${params.id}`;
  }
}
