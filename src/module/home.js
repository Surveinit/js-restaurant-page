export function homeModule() {
  const contentContainer = document.getElementById("content");
  contentContainer.innerHTML = "";

  const recipeHeading = document.createElement("h2");
  const recipeImage = document.createElement("img");

  recipeHeading.textContent = "Puranpoli";
  recipeImage.src = "https://static.tnn.in/thumb/msid-114212590,thumbsize-1439396,width-1280,height-720,resizemode-75/114212590.jpg";

  contentContainer.appendChild(recipeHeading);
  contentContainer.appendChild(recipeImage);
};
