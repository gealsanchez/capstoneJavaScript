const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ooCKDNVhVwx5nuC5j8LT/comments';

const postComment = async (name, comment, idMeal) => {
  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      // eslint-disable-next-line
      item_id: idMeal,
      // eslint-disable-next-line
      username: name,
      // eslint-disable-next-line
      comment: comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  return data;
};

export default postComment;