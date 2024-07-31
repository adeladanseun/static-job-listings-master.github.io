const items = document.querySelectorAll(".wrapper .item");
const tags = document.querySelectorAll(".wrapper .footWrapper .footIcon");
const filterWrapper = document.getElementById("filterSection");
const clear = document.querySelector(".filter .clear");
updateListing();

for (let i = 0; i < tags.length; i++) {
  tags[i].addEventListener("click", () => {
    addToFilter(tags[i].innerText);
  });
}

function addToFilter(string) {
  if (!existInFilter(string)) {
    let newEl = createFilterEl(string);
    filterWrapper.appendChild(newEl);
    updateListing();
  }
}

function existInFilter(string) {
  for (let i = 0; i < filterWrapper.children.length; i++) {
    if (filterWrapper.children[i].children[0].innerText === string) {
      return true;
    }
  }
  return false;
}

function createFilterEl(string) {
  let main = document.createElement("span");
  main.classList.add("filterItem");
  let text = document.createElement("span");
  text.classList.add("filterText");
  text.innerText = string;
  main.appendChild(text);
  let cancel = document.createElement("span");
  cancel.classList.add("filterCancel");
  cancel.addEventListener("click", () => {
    filterWrapper.removeChild(
      main
    ); /* Remove entry on click of the cancel button */
    updateListing();
  });
  main.appendChild(cancel);
  return main;
}
clear.addEventListener("click", () => {
  [...filterWrapper.children].map((element) => {
    filterWrapper.removeChild(element);
  });
  updateListing();
});
function updateListing() {
  let filterTexts = [...filterWrapper.children].map((child) => {
    return child.children[0].innerText;
  });
  if (!filterTexts.length) {
    filterWrapper.parentElement.classList.add("filterhide");
    filterWrapper.parentElement.classList.remove("filtershow");
    items.forEach((item) => {
      item.classList.remove("itemhide");
      item.classList.remove("itemshow");
    });
    return;
  } else {
    filterWrapper.parentElement.classList.add("filtershow");
    filterWrapper.parentElement.classList.remove("filterhide");
  }
  let dataSpot = ["role", "level", "languages", "tools"];
  items.forEach((item) => {
    item.classList.add("itemhide");
    let itemData = [];
    dataSpot.forEach((spot) => {
      if (item.dataset[spot]) {
        whiteSpaceRemover(item.dataset[spot].slice(1, -1))
          .split(",")
          .forEach((entry) => {
            itemData.push(entry);
          });
      }
    });
    if (!filterTexts.filter((item) => !itemData.includes(item)).length) {
      item.classList.add("itemshow");
      item.classList.remove("itemhide");
    }
  });
}
function whiteSpaceRemover(string) { /* Removes whitespaces so that correct matches can be found from formats like 'html css' */
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] != " ") {
      newString += string[i];
    }
  }
  return newString;
}
