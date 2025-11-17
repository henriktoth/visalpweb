import { register, init, locale as $locale } from 'svelte-i18n';

register('en', () => import('./locales/en.json'));
register('hu', () => import('./locales/hu.json'));

// Determine initial locale: prefer stored user choice, then navigator, then fallback
let initial = 'en';
if (typeof window !== 'undefined') {
	try {
		const stored = localStorage.getItem('locale');
		if (stored) {
			initial = stored;
		} else if (navigator && navigator.language) {
			// use primary language (e.g. 'en' from 'en-GB') if supported
			initial = navigator.language.split('-')[0];
		}
	} catch {
		// ignore storage errors and fall back to defaults
	}
}

init({
	fallbackLocale: 'en',
	initialLocale: initial
});

// Persist locale changes to localStorage so choice survives reloads
if (typeof window !== 'undefined') {
	$locale.subscribe((val) => {
		try {
			if (val) localStorage.setItem('locale', val);
		} catch {
			// ignore
		}
	});
}
