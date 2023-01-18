const CONFIG = {
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  IMAGE_URL: {
    SMALL: 'https://restaurant-api.dicoding.dev/images/small/',
    MEDIUM: 'https://restaurant-api.dicoding.dev/images/medium',
    LARGE: 'https://restaurant-api.dicoding.dev/images/large/',
  },
  DEFAULT_LANGUAGE: 'en-us',
  CACHE_NAME: new Date().toISOString(),
  // CACHE_NAME: 'RestaurantsCatalogue-V1',
  DATABASE_NAME: 'EnaksRestaurants-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',
};

export default CONFIG;
