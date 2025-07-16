let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let container = document.querySelector(".container");
menuIcon.onclick = function () {
  sidebar.classList.toggle("small-sidebar");
  container.classList.toggle("large-container");
};

let searchInput = document.getElementById("search-input");
let videoCards = document.querySelectorAll(".vid-list");
const listContainer = document.querySelector(".list-container");

searchInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    let query = searchInput.value.toLowerCase();
    if(query){
        listContainer.classList.add("search-results-active");
    }
    else{
        listContainer.classList.remove("search-results-active");
    }
    let matchFound = false;

    videoCards.forEach((card) => {
      let title = card.getAttribute("data-title").toLowerCase();

      if (title.includes(query)) {
        card.classList.remove("hidden");
        matchFound = true;
      } else {
        card.classList.add("hidden");
      }
    });

    
    let noResult = document.getElementById("noResult");
    if (!matchFound && query) {
      if (!noResult) {
        noResult = document.createElement("p");
        noResult.id = "noResult";
        noResult.textContent = "No results found.";
        noResult.style.color = "red";
        document.querySelector(".list-container").appendChild(noResult);
      }
    } else {
      if (noResult) {
        noResult.remove();
      }
    }
  }
});
