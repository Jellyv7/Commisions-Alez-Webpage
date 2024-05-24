import { ENGLISH } from './en.json'
import { SPANISH } from './es.json';

export const getI18N = (currentLocale = 'es') => {
	if (currentLocale === 'es') return SPANISH;
	if (currentLocale === 'en') return ENGLISH;
	return ENGLISH;
}