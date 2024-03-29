const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ooCKDNVhVwx5nuC5j8LT/likes/';

const postLike = async (idMeal) => {
  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      item_id: idMeal,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  return data;
};

export default postLike;