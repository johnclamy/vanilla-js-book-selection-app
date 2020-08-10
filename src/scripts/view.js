import Model from './model'

const View = {
  $eBookList: document.querySelector('.ebook-list'),
  $ebookCount: document.querySelector('.ebook-count'),
  $completedRead: document.querySelector('.completed-read'),
  $stillToRead: document.querySelector('.still-to-read'),

  displayBookList () {
    Model.initalTodos.forEach(todo => {
      this.$eBookList.appendChild(this.createMenuItem(todo))

    })
  },
  createMenuItem (content) {
    const $listItem = document.createElement('li')
    $listItem.textContent = content.title
    return $listItem
  },

  displayBookCount () {},
  displayCompletedRead () {},
  displayStillToRead () {}
}

export default View