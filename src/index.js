import View from './scripts/view'
import Model from './scripts/model'
import './styles.css'

window.onload = init

function init () {
  const $addBookBtn = document.querySelector('#btn-add-ebook')
  const $eBookList = document.querySelector('.ebook-list')

  $addBookBtn.addEventListener('click', handleAddBook)

  updateBookList()
  View.displayStats(Model)

  // Display content to the UL (List of books)
  function updateBookList () {   
    const eBookItems = View.displayListItems(Model.eBooks)

    if (eBookItems.length) {
      eBookItems.forEach(item => $eBookList.append(item))
    } else {
      const MESSAGE = 'You currently have no books to read.'
      const $message = document.createElement('p')

      $message.textContent = MESSAGE
      $message.style.backgroundColor = 'LightYellow'
      $message.style.padding = '20px'
      $message.style.textAlign = 'center'
      $message.style.fontSize = '1.2rem'
      $message.style.fontWeight = 'bold'
      $message.style.color = 'DarkOrange'

      $eBookList.style.display = 'none'
      $eBookList.insertAdjacentHTML($message)
    }
  }

  // Save input data to state property and render the
  // list when ADD button is clicked
  function handleAddBook () {
    const $title = document.querySelector('#title-input')
    const $shortDesr = document.querySelector('#short-desr-input')    
    const book = { title: $title.value, shortDesr: $shortDesr.value }

    $title.value = ''
    $shortDesr.value = ''

    Model.addEbook(book)
    View.clearBookList($eBookList)
    View.displayStats(Model)
    updateBookList()
  }
}
