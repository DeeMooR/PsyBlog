import { promises as fs } from 'fs';

export const postToPostFile = async (post) => {
  try {
    const data = await fs.readFile(post.image);
    const fileBase64 = data.toString('base64');
    return { ...post, image: fileBase64 };
  } catch (err) {
    return { ...post, image: null };
  }
} 