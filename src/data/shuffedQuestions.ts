import quesData from "./questions.json";

const questions = [...quesData];
for (let i = questions.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  const k = questions[i];
  questions[i] = questions[j];
  questions[j] = k;
}
export default questions;
