import View from './scripts/view'
import Model from './scripts/model'
import './styles.css'

window.onload = init

function init () {
  const $eBookList = document.querySelector('.ebook-list')
  const $addBookBtn = document.querySelector('#submit-ebook')

  $addBookBtn.addEventListener('click', handleAddBook)

  updateBookList()

  View.displayBookCount(Model.eBookCount)
  View.displayCompletedRead(Model.completedRead)
  View.displayStillToRead(Model.stillToRead())

  function updateBookList () {
    const eBookItems = View.displayListItems(Model.eBooks)
    eBookItems.length && eBookItems.forEach(item => $eBookList.append(item))
  }

  function handleAddBook (e) {
    const $title = document.querySelector('#title-input')
    const $descr = document.querySelector('#short-descr-input')    
    const book = { title: $title.value, shortDesr: $descr.value }

    Model.addEbook(book)
    updateBookList()
    e.preventDefault()
  }
}
