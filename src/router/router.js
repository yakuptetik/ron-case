import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import API from '../utils/API'

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	const token = localStorage.getItem('token');

	if(token) {
		API.defaults.headers.common['Authorization'] = `Bearer ${token}`
	}

	next();
});

// router.beforeEach((to) => {
//   if (to.meta.isAuthenticated && localStorage.getItem('token') === '') {
//     return { name: 'Login' };
//   }
// });


export default router;
