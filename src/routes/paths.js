export const Paths = {
    HOME: '/',
    SIMPLE: '/simple',
    FULL: '/full',
    FULLSCREEN_LAYOUT: '/full',
    PARAM: (slug) => `/page/${slug || ':slug'}/info`,
}
