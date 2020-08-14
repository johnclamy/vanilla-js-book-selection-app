import initialData from '../data/initial-data'

const eBooks = initialData.length ? initialData : []

const Model = {
  eBooks,
  eBookCount: eBooks.length ? eBooks.length : 0,
  completedRead: 0,
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
  }
}

export default Model