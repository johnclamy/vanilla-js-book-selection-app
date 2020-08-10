import "./styles.css";
import View from "./scripts/view";
import Model from "./scripts/model";

const $eBookList = document.querySelector(".ebook-list");

Model.initialBooks.forEach((book) => {
  $eBookList.appendChild(View.createMenuItem(book));
});
