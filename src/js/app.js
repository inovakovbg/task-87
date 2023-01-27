import "../scss/app.scss";
import * as R from "/node_modules/ramda";
import {forEach} from "ramda";


window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const arrayToPluck = [
    { name: "John", class: "is-primary" },
    { age: 23, class: "is-warning" },
    { job: "programmer", class: "is-danger" },
  ];
  const articles = document.querySelectorAll("article");
  console.log(articles);
  console.log(articles.length);
  console.log(arrayToPluck[0]);


  let x = R.pluck("class");
  console.log(x((arrayToPluck)[0]));

  for (let i = 0; i < articles.length; i++) { articles[i].classList.add(x(arrayToPluck)[i]);}





});
