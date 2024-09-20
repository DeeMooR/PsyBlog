const baseURL = 'http://localhost:5000/api'

export const endpoints = {
  posts: `${baseURL}/posts`,
  fullPosts: `${baseURL}/fullPosts`,
  shortPosts: `${baseURL}/shortPosts`,
  shortPostsTop: `${baseURL}/shortPosts/top`,
  shortPostsAdmin: `${baseURL}/shortPosts/admin`,

  postBlock: `${baseURL}/post_blocks`,
  postImage: `${baseURL}/post/image`,

  users: `${baseURL}/users`,
  checkAdmin: `${baseURL}/admin/check`,
};
