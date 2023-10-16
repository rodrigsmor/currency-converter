export function normalizePathname(pathname: string, lang: string) {
  const isHome = pathname.split('/').length > 1

  return (pathname === '/')
    ? '/'
    : pathname.replace(`${!isHome ? '/' : ''}${lang}`, '')
}