import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const MainMenu = {
  async render() {
    return `
        <div class="content-web">
            <h2 class="title-content">Explore Restaurant</h2>
            <div id="restaurants" class="restaurant-list">/div>
        </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.mainMenuRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default MainMenu;
