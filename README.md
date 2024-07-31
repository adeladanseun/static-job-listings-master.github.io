# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Job listings with filtering solution](#frontend-mentor---job-listings-with-filtering-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I Learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Screenshot

![](images/Screenshot%20Capture%20-%202024-07-30%20-%2015-01-44.png)

### Links

- Solution URL: [Github](https://github.com/adeladanseun/static-job-listings-master.github.io)
- Live Site URL: [Github Pages](https://github.com/adeladanseun.github.io/static-job-listings-master.github.io)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I Learned
I learned how to iterate through the children of an element and took it to a new level creating my updateListing function

```js
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
```


### Continued development

In the future I'll be exploring a deeper level of the use of API's in web development to create webpages. 



## Author

- Github - [@adeladanseun](https://www.github.com/adeladanseun)
- Frontend Mentor - [@adeladanseun](https://www.frontendmentor.io/profile/adeladanseun)
- LinkedIn - [@oluwaseunadeladan](https://www.linkedin.com/in/oluwaseunadeladan/)
