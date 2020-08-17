import initialData from '../data/initial-data'

const eBooks = initialData.length ? initialData : []

const Model = {
  eBooks,
  eBookCount: eBooks.length ? eBooks.length : 0,
  completedRead: 0,
  isCompleted: false,

  stillToRead() {
    return !this.completedRead
      ? this.eBookCount
      : this.eBookCount - this.completedRead;
  },

  addEbook (book) {
    // using the same id ONLY for testing purposes
    book.id = 'bkvt-4873654-lpo-8371-tm'
    this.eBooks.push(book)
    this.eBookCount += 1
  },

  setEbookComplete () {
    this.completedRead += 1
    this.isCompleted = true
    return this.stillToRead()
  },

  setEbookUncomplete () {
    if (this.completedRead > 1) {
      this.completedRead -= 1
    } else if (this.completedRead === 0) {
      this.completedRead = 0
    }
    this.isCompleted = false
    return this.stillToRead()
  },

  toggleEbookComplete () {
    return !this.isCompleted
      ? this.setEbookComplete()
      : this.setEbookUncomplete()
  },

  removeBook (bookId) {
    this.eBooks = this.eBooks.filter(book => book.id !== bookId)
  }
}

export default Model