import routes from '@/router';

declare module '@/router' {
  import { Plugin} from 'vue-router';

  const routes: Plugin<[]>;

  export default routes;
}