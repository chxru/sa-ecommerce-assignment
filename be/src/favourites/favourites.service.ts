import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateFavouriteDto } from './dto/create-favourite.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class FavouritesService {
  constructor(private userService: UsersService) {}

  create(createFavouriteDto: CreateFavouriteDto, user: string) {
    if (!user) {
      throw new UnauthorizedException();
    }

    if (createFavouriteDto.create) {
      this.userService.addFavourite(user, createFavouriteDto.product);
    } else {
      this.userService.removeFavourite(user, createFavouriteDto.product);
    }

    return {
      id: createFavouriteDto.product,
    };
  }

  getAll(user: string) {
    if (!user) {
      throw new UnauthorizedException();
    }

    return this.userService.getFavorites(user);
  }
}
