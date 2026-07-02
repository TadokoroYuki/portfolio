import type { Dictionary, Locale } from './types';
import { locales } from './types';
import { ja } from './dictionaries/ja';
import { en } from './dictionaries/en';

export { locales };
export type { Dictionary, Locale };

const dictionaries: Record<Locale, Dictionary> = { ja, en };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
