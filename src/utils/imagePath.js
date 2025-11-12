/**
 * Converts localhost image URLs to production-ready paths
 * @param {string} localhostUrl - URL like 'http://localhost:3845/assets/filename.png'
 * @returns {string} - Production path like '/figma-menu-screen/assets/filename.png'
 */
export function getImagePath(localhostUrl) {
  if (!localhostUrl) return null;
  
  // Extract filename from localhost URL
  const filename = localhostUrl.replace(/^https?:\/\/[^\/]+/, '');
  
  // Return with base URL
  return `${import.meta.env.BASE_URL}${filename.replace(/^\//, '')}`;
}

