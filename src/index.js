import "./styles.css";
import View from './scripts/view'

const $todoList = document.querySelector('.eBook-list-header')

$todoList.insertAdjacentHTML('afterend', View.displayBookList())