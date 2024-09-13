const baseURL = 'http://localhost:5000/api'

export const endpoints = {
  posts: `${baseURL}/posts`,
  shortPosts: `${baseURL}/shortPosts`,
  shortPostsAdmin: `${baseURL}/shortPosts/admin`,
  fullPost: `${baseURL}/fullPost`,
  addBlock: `${baseURL}/posts/addBlock`,
  updateBlock: `${baseURL}/post_blocks/block`,
  deleteBlock: `${baseURL}/post_blocks/block`
};
