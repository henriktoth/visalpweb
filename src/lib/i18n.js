import { register, init } from 'svelte-i18n';

register('en', () => import('./locales/en.json'));
register('hu', () => import('./locales/hu.json'));

init({
	fallbackLocale: 'en',
	initialLocale: 'hu'
});
