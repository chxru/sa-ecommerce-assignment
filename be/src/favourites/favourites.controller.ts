import { Controller, Get, Post, Body, Request } from '@nestjs/common';
import { FavouritesService } from './favourites.service';
import { CreateFavouriteDto } from './dto/create-favourite.dto';

@Controller('favourites')
export class FavouritesController {
  constructor(private readonly favouritesService: FavouritesService) {}

  @Post()
  create(@Body() createFavouriteDto: CreateFavouriteDto, @Request() req) {
    return this.favouritesService.create(createFavouriteDto, req.user.id);
  }

  @Get()
  findAll(@Request() req) {
    return this.favouritesService.getAll(req.user.id);
  }
}
