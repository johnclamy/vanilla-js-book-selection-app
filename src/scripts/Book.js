import initialData from '../data/initial-data'

const books = initialData.length ? initialData : []

const Book = {
  books,
  totalCount: books.length ? books.length : 0,
  completedCount: 0,
  isCompleted: false,

  resetStats () {
    if (this.totalCount === 0) {
      this.completedCount = 0
    }
  },

  getToReadCount () {
    return !this.completedCount
      ? this.totalCount
      : this.totalCount - this.completedCount
  },

  // Using the same id ONLY for testing purposes.
  // The argument is a book object with title 
  // and short description properties
  add (book) {
    book.id = 'bkvt-4873654-lpo-8371-tm'
    this.books.push(book)
    this.totalCount += 1
  },

  // Mark a book item as been read
  setRead () {
    if (this.completedCount <= this.totalCount) {
      this.completedCount += 1
      this.isCompleted = true
    }
  },

  removeBy (bookId) {
    const books = this.books.filter(book => book.id !== bookId)
    this.books = [...books]
    this.totalCount -= 1
    console.log('removeBy', this.books)
  }
}

export default Book