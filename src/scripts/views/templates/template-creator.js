import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <img class="restaurant-img lazyload" data-src="${CONFIG.IMAGE_URL.SMALL + restaurant.pictureId}" alt="${restaurant.name}">
      <div class="restaurant-city"><p>Kota ${restaurant.city}</p></div>
        <div class="restaurant-info">
          <p class="restaurant-rating">Rating: <i class="fa fa-star" style="font-size:24px;color:#ffb300"></i> ${restaurant.rating}</p>
          <h3 class="restaurant__title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
          
          <p>${restaurant.description}</p>
        </div>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
<div class="header_title_detail">
  <h3>Detail Restaurant</h3>
</div>
<div class="detail-item">
<div class="container-detail">
    <img class="restaurant__img lazyload" data-src="${CONFIG.IMAGE_URL.LARGE + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h2 class="restaurant__name">${restaurant.name}</h2>
    <h3>Rating: <i class="fa fa-star" style="font-size:24px;color:#ffb300"></i> ${restaurant.rating}</h3>
    <p><i class="fa fa-map-marker" style="font-size:24px"></i> ${restaurant.address}, Kota ${restaurant.city}</p>
    <h3>Kategori: </h3><p>${restaurant.categories.map((n) => n.name)}</p>
    <h3>Makanan: </h3><p>${restaurant.menus.foods.map((n) => n.name)}</p>
    <h3>Minuman: </h3><p>${restaurant.menus.drinks.map((n) => n.name)}</p>
  </div>
  <div class="restaurant__description">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
</div>
</div>

<div class="header_title_Crv">
  <h3>List Customer Review</h3>
</div>

`;

const createRestaurantReviewTemplate = (review) => `
  <div class="review-detail">
    <div class="review-main">
      <i class="fa fa-user-circle" style="font-size: 40px"></i>
        <h4 class="detail-name">${review.name}</h4>
        <p class="detail-date">${review.date}</p>
        <hr>
        <p class="detail-review">${review.review}</p>
      </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantReviewTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
