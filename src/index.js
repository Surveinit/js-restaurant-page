console.log('from index.js')

import { homeModule } from "./module/home.js";
import { menuModule } from "./module/menu.js";
import { aboutModule } from "./module/about.js";

(function run() {
  const contentContainer = document.getElementById("content");
  contentContainer.innerHTML = "";
  
  document.getElementById("home-btn").addEventListener("click", homeModule);
  document.getElementById("menu-btn").addEventListener("click", menuModule);
  document.getElementById("about-btn").addEventListener("click", aboutModule);
   
})();
