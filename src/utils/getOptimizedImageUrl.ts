export const getOptimizedImageUrl = (originalUrl: string, width = 800) => {
  const baseUrl = originalUrl.split('?')[0];
    return `${baseUrl}?fm=webp&q=75&w=${width}&auto=compress`;
}