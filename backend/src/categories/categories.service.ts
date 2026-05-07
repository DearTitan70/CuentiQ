import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/categorie.entity/categorie.entity';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(Category)
        private readonly repo: Repository<Category>,
    ) { }
    async create(data: CreateCategoryDto) {
        const category = this.repo.create(data);
        return this.repo.save(category);
    }
    async findAll() {
        return this.repo.find();
    }
}
