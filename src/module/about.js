export function aboutModule() {
  const contentContainer = document.getElementById("content");
  contentContainer.innerHTML = "";

  const authorHeading = document.createElement("h2");
  const authorDescription = document.createElement("p");

  authorHeading.textContent = "Surve";
  authorDescription.content = "I am the best ig!";

  contentContainer.appendChild(authorHeading);
  contentContainer.appendChild(authorDescription);
};
