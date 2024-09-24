export const formatISOToDate = (myDate) => {
  const date = new Date(myDate)
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export const postWithTrueDate = (post) => {
  const date = new Date(post.date + 'Z');
  return {...post, date}
}