import { ENGLISH } from './en.json'
import { SPANISH } from './es.json';

const LANGUAGES = {
	SPANISH: 'es',
	ENGLISH: 'en'
}

export const getI18N = (currentLocale = 'es') => {
	if (currentLocale === LANGUAGES.SPANISH) return SPANISH;
	if (currentLocale === LANGUAGES.ENGLISH) return ENGLISH;
	return ENGLISH;
}