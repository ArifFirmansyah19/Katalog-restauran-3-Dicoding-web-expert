import CONFIG from './config';

const API_ENDPOINT = {
  MAIN_MENU: `${CONFIG.BASE_URL}list`,
  FAVORITE: `${CONFIG.BASE_URL}restaurant/like`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;
