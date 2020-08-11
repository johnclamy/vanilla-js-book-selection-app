import initialData from '../data/initial-data'

const Model = {
  eBooks: initialData,
  eBookCount: initialData.length,
  completedRead: 0,
  stillToRead() {
    return !this.completedRead
      ? this.eBookCount
      : this.eBookCount - this.completedRead;
  },
  addEbook (book) {
    book.id = 'bkvt-4873654-lpo-8371-tm'
    this.eBooks.push(book)
  }
}

export default Model