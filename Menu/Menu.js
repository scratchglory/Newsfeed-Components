/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out"
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
let h1 = document.getElementsByTagName("h1");
h1[0].style.color = "dodgerblue";

let header = document.querySelector(".header");

function menuCreator(items) {
  let menu = document.createElement("div");
  let ul = document.createElement("ul");
  //   let li = document.createElement("li");
  let img = document.querySelector(".menu-button");

  // adding class
  menu.classList.add("menu");

  // appending
  header.appendChild(menu);
  menu.appendChild(ul);

  // setting up html
  items.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });

  img.addEventListener("click", event => {
    menu.classList.toggle("menu--open");
  });

  return menu;
}

console.log(menuCreator(menuItems));

// stretch
gsap.to("h1", { rotation: 360, duration: 1 });
gsap.from("h1", {
  opacity: 0,
  y: 500,
  duration: 1
});
