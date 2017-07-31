/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */


/**
 * The routes
 *
 * @type {object} The routes
 */
export default [
  // Home
  {
    path: '/home',
    name: 'home.index',
    component: require('@/modules/shared/components/home.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },

  // Account
  {
    path: '/account',
    name: 'account.index',
    component: require('@/modules/account/components/index.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },

  // Login
  {
    path: '/login',
    name: 'login.index',
    component: require('@/modules/auth/components/login.vue'),

    // If the user needs to be a guest to view this page
    meta: {
      guest: true,
    },
  },

  // Register
  {
    path: '/register',
    name: 'register.index',
    component: require('@/modules/auth/components/register.vue'),

    // If the user needs to be a guest to view this page
    meta: {
      guest: true,
    },
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/*',
    redirect: '/home',
  },
];
