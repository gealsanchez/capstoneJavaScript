import getComments from "./getComments.js";
import commentCard from "./commentCard.js";
import commentCounter from "./commentCounter.js";

const commentary = async (idMeal) => {
  const counter = document.querySelector('.divCounter');
  const div = document.createElement('div');
  div.className = 'counting';
  const data = await getComments(idMeal);
  data.forEach((comment) => {
    commentCard(comment.username, comment.creation_date, comment.comment);
  });
  counter.innerHTML = '';
  div.innerHTML = `<h4></h4><h4>Comments(${commentCounter()})</h4>`;
  counter.appendChild(div);
};

export default commentary;