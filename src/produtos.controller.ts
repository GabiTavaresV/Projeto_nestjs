import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('produtos')
export class ProdutosController {
  @Get()
  obterTodos(): string {
    return 'Lista de todos os produtos';
  }

  @Get(':id')
  obterUm(@Param() params): string {
      return `Retorna os dados do produto ${params.id}`;
  }

  @Post()
  criar(@Body() produto): string {
      console.log(produto)
      return 'Produto criado';
  }
}
