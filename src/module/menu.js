const recipes = [
  {
    name: "Puranpoli",
    description:
      "Sweet flatbread stuffed with lentil jaggery filling, festive treat.",
  },
  {
    name: "Misal Pav",
    description: "Spicy sprout curry topped with farsan, served with pav.",
  },
  {
    name: "Bhakri with Thecha",
    description: "Jowar roti paired with spicy green chili garlic chutney.",
  },
  {
    name: "Sabudana Khichdi",
    description:
      "Tapioca pearls stir-fried with peanuts, potatoes, and spices.",
  },
  {
    name: "Vada Pav",
    description:
      "Spicy potato fritter in bun with chutney, Mumbai's favorite snack.",
  },
];

export function menuModule() {
  const contentContainer = document.getElementById("content");
  contentContainer.innerHTML = "";

  recipes.forEach((recipe) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.id = recipe.id;

    card.innerHTML = `<h2>${recipe.name}</h2>
    <p>${recipe.description}</p>`;

    contentContainer.appendChild(card);
  });
};
