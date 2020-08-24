import View from './scripts/View'
import Book from './scripts/Book'
import './styles.css'

window.addEventListener('load', init)

function init () {
  const $books = document.querySelector('.ebook-list')
  const $addBtn = document.querySelector('#btn-add-ebook')

  $addBtn.addEventListener('click', handleAddButton)

  render()

  /* Save input data to state property and render the
     page content when ADD button is clicked */
  function handleAddButton () {
    const $title = document.querySelector('#title-input')
    const $shortDesr = document.querySelector('#short-desr-input')    
    const book = { title: $title.value, shortDesr: $shortDesr.value }

    $title.value = ''
    $shortDesr.value = ''

    Book.add(book)
    render()
  }
 
  function renderList () {
    const books = View.listItems(Book.books)

    if (!books.length) {
      View.clearList($books)
      View.renderEmptyList($books)
      Book.resetStats()
    } else {
      View.clearList($books)
      books.forEach(book => {
        book.onclick = () => {
          book.append(View.renderRemoveBtn())
          if (!Book.isCompleted) {
            const $delBtn = document.querySelector('#del-btn')
            const handleDelButton = () => {
              Book.removeBy(book.id)
              render()
            }
            book.firstChild.style.textDecoration = 'line-through'
            $delBtn.addEventListener('click', handleDelButton)
            Book.setRead()
          }
          book.onclick = null
          View.renderStats(Book)
          Book.isCompleted = false
        }
        $books.append(book)
      })
    }    
  }
  
  function render () {
    renderList()
    View.renderStats(Book)
  }
}
