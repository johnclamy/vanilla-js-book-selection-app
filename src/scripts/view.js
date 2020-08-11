const View = {
  $ebookCount: document.querySelector(".ebook-count"),
  $completedRead: document.querySelector(".completed-read"),
  $stillToRead: document.querySelector(".still-to-read"),

  createListItem(content) {
    const $listItem = document.createElement("li");
    $listItem.textContent = content.title;
    return $listItem;
  },

  clearDisplayList () {},

  displayListItems (listItems) {
    const $listItems = listItems.map(item =>
      this.createListItem(item)
    )
    return $listItems
  },

  setStyle (element, bgColour) {
    element.style.backgroundColor = bgColour
    element.style.color = 'white'
    element.style.padding = '6px'
    element.style.borderRadius = '5px'
    element.style.width = '90px'
    element.style.textAlign = 'center'
  },

  displayBookCount(count) {
    const text = `Total books ${count}`
    this.$ebookCount.textContent = text
    this.setStyle(this.$ebookCount, 'MediumBlue')
  },

  displayCompletedRead(completedCount) {
    const text = `Completed ${completedCount}`
    this.$completedRead.textContent = text
    this.setStyle(this.$completedRead, 'Crimson')
  },

  displayStillToRead(toReadCount) {
    const text = `Still to read ${toReadCount}`
    this.$stillToRead.textContent = text
    this.setStyle(this.$stillToRead, 'ForestGreen')
  }
}

export default View
