/**
 * Converts localhost image URLs to production-ready paths
 * @param {string} localhostUrl - URL like 'http://localhost:3845/assets/filename.png'
 * @returns {string} - Production path like '/figma-menu-screen/assets/filename.png'
 */
export function getImagePath(localhostUrl) {
  if (!localhostUrl) return null;
  
  // In development, keep localhost URLs if they exist
  // In production, convert to base path
  if (import.meta.env.DEV && localhostUrl.includes('localhost')) {
    // Try to use localhost in development
    return localhostUrl;
  }
  
  // Extract filename from localhost URL
  const filename = localhostUrl.replace(/^https?:\/\/[^\/]+/, '');
  
  // Return with base URL for production
  return `${import.meta.env.BASE_URL}${filename.replace(/^\//, '')}`;
}

