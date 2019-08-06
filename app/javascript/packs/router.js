import VueRouter from 'vue-router';
import Index from '../src/components/index.vue';
import UserIndex from '../src/components/users/index.vue';
import Help from '../src/components/common/help.vue';

const routes = [
  { path: '/', component: Index },
  { path: '/help', component: Help },
  { path: '/users', component: UserIndex }

];

export default new VueRouter({ routes });
