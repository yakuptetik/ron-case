import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
		path: '/',
		name: 'Home',
		component: () => import('../views/HomePage.vue'),
		meta: {
			isAuthenticated: false,
		}
	},
  {
		path: '/login',
		name: 'Login',
		component: () => import('../views/LoginFormView.vue'),
		meta: {
			isAuthenticated: false,
		}
	},
	{
		path: '/register',
		name: 'Register',
		component: () => import('../views/RegisterFormView.vue'),
		meta: {
			isAuthenticated: false,
		}
	},
	{
		path: '/details',
		name: 'Details',
		component: () => import('../views/DetailsPage.vue'),
		meta: {
			isAuthenticated: false,
		}
	},
	{
		path: '/tickets',
		name: 'Tickets',
		component: () => import('../views/MyTicket.vue'),
		meta: {
			isAuthenticated: false,
		}
	}
	// {
	// 	path: '/authenticate',
	// 	name: 'Authenticate',
	// 	component: () => import('../views/AuthenticatedPage.vue'),
	// 	meta: {
	// 		isAuthenticated: true,
	// 	}
	// },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});


export default router;
