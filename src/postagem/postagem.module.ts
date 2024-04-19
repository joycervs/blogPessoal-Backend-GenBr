import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostagemController } from './controllers/PostagemController';
import { Postagem } from './entities/postagem.entity';
import { PostagemService } from './services/postagem.service';

@Module({
  imports: [TypeOrmModule.forFeature([Postagem])],
  providers: [PostagemService],
  controllers: [PostagemController],
  exports: [TypeOrmModule],
})
export class PostagemModule {}
