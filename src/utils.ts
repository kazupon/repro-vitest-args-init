import { SOMETHING_VALUES } from './constants'

export function getLocale({ defaultLocale = SOMETHING_VALUES.defaultLocale }: { defaultLocale?: string } = {}) {
  return defaultLocale
}