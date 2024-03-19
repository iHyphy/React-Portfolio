export const getImageUrl = (path) => {
    return new url('/assets/${path}', import.meta.url).href;
}