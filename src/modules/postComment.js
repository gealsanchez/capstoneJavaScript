const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ooCKDNVhVwx5nuC5j8LT/comments';

const postComment = async (name, comment, idMeal) => {
  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      idMeal,
      name,
      comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  return data;
};

export default postComment;