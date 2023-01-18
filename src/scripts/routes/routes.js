import MainMenu from '../views/pages/main-menu';
import Like from '../views/pages/like';
import Detail from '../views/pages/detail';

const routes = {
  '/': MainMenu, // default page
  '/main-menu': MainMenu,
  '/like': Like,
  '/detail/:id': Detail,
};

export default routes;
