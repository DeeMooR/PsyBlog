export const formatISOToDate = (myDate) => {
  const date = new Date(myDate)
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export const formatISOToDateTime = (myDate) => {
  const day = formatISOToDate(myDate);
  const date = new Date(myDate);
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${day}-${hours}-${minutes}`;
};

export const postWithTrueDate = (post) => {
  const date = new Date(post.date + 'Z');
  return {...post, date}
}

export const addFullImagePath = (req, post) => {
  if (post.image) {
    // post.image = `${req.protocol}://${req.get('host')}/images/${post.image}`;
    post.image = `https://api.razvalyaeva.com/images/${post.image}`;
  }
  return post;
};