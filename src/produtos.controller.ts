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
  obterUm(@Param() params): Produto {
    return this.produtos[0]
  }

  @Post()
  criar(@Body() produto: Produto) {
    produto.id = 1100;
    return this.produtos.push(produto)
  }

  @Put()
  alterar(@Body() produto: Produto) {
    return produto;
  }

  @Delete(':id')
  apagar(@Param() params){
    return this.produtos.pop();
  }
}
