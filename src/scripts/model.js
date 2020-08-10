import initialData from "../data/initial-data";

const Model = {
  initialBooks: initialData,
  eBookCount: initialData.length,
  completedRead: 0,
  stillToRead() {
    return !this.completedRead
      ? this.eBookCount
      : this.eBookCount - this.completedRead;
  }
};

export default Model;
