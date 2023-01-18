/* eslint-disable eqeqeq */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */
/* eslint-disable no-undef */

import { itActsAsfavoriteRestoModel } from './contract/favoriteRestoContract';

let favoriteRestos = [];

const FavoriteRestoArray = {

  getRestaurant(id) {
    if (!id) {
      return;
    }

    return favoriteRestos.find((restaurant) => restaurant.id == id);
  },

  getAllRestaurants() {
    return favoriteRestos;
  },

  putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteRestos
    if (this.getRestaurant(restaurant.id)) {
      return;
    }

    favoriteRestos.push(restaurant);
  },

  deleteRestaurant(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteRestos = favoriteRestos.filter((restaurant) => restaurant.id != id);
  },
};

describe('Favorite Restaurants Array Contract Test Implementation', () => {
  afterEach(() => favoriteRestos = []);

  itActsAsfavoriteRestoModel(FavoriteRestoArray);
});
