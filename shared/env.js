const ENV   = process.env.NODE_ENV;
const BUILD = process.env.NODE_BUILD;

export const isDevelopment = ENV === 'development';
export const isProduction  = ENV === 'production';

export const isServer      = BUILD === 'server';
export const isBrowser     = typeof window === 'object';