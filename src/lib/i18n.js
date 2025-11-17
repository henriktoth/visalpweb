import { register, init, locale as $locale } from 'svelte-i18n';

register('en', () => import('./locales/en.json'));
register('hu', () => import('./locales/hu.json'));

let initial = 'hu';
if (typeof window !== 'undefined') {
	try {
		const stored = localStorage.getItem('locale');
		if (stored) {
			initial = stored;
		} else if (navigator && navigator.language) {
			initial = navigator.language.split('-')[0];
		}
	} catch {
		// ignore
	}
}

init({
	fallbackLocale: 'en',
	initialLocale: initial
});

if (typeof window !== 'undefined') {
	$locale.subscribe((val) => {
		try {
			if (val) localStorage.setItem('locale', val);
		} catch {
			// ignore
		}
	});
}
