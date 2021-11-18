// 1. 1
const getPoint = async () => {
  let agify = await fetch("https://api.agify.io?name=michael");
  let agifyJson = await agify.json();
  console.log(agifyJson);
};
getPoint();

// 2. 1
document.querySelector("button").addEventListener("click", () => {
  let userName = document.querySelector("input").value;
  getNationalize(userName);
});
const getNationalize = async (userName) => {
  const nationalize = await fetch(
    `https://api.nationalize.io/?name=${userName}`
  );
  const nationalizeJson = await nationalize.json();
  displayUser(userName, nationalizeJson);
};
