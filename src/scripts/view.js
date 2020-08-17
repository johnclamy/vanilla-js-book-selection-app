const View = {
  $ebookList: document.querySelector('.ebook-list'),
  $ebookCount: document.querySelector(".ebook-count"),
  $completedRead: document.querySelector(".completed-read"),
  $stillToRead: document.querySelector(".still-to-read"),

  createListItem (content) {
    const $listItem = document.createElement("li")
    $listItem.textContent = content.title
    $listItem.setAttribute('id', content.id)
    $listItem.setAttribute('title', content.shortDesr)
    $listItem.style.cursor = 'pointer'
    return $listItem
  },

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

  clearBookList (list) {
    while (list.firstChild) {
      list.removeChild(list.firstChild)
    }
  },

  displayBookCount (count) {
    const text = `Total books ${count}`
    this.$ebookCount.textContent = text
    this.setStyle(this.$ebookCount, 'MediumBlue')
  },

  displayCompletedRead (completedCount) {
    const text = `Completed ${completedCount}`
    this.$completedRead.textContent = text
    this.setStyle(this.$completedRead, 'Crimson')
  },

  displayStillToRead (toReadCount) {
    const text = `Still to read ${toReadCount}`
    this.$stillToRead.textContent = text
    this.setStyle(this.$stillToRead, 'ForestGreen')
  },

  displayStats (stats) {
    this.displayBookCount(stats.eBookCount)
    this.displayCompletedRead(stats.completedRead)
    this.displayStillToRead(stats.stillToRead())
  },

  displayRemoveBtn (delClickHandler) {
    const $removeBtn = document.createElement('button')
    $removeBtn.addEventListener('click', delClickHandler)
    $removeBtn.textContent = 'x'
    $removeBtn.style.color = 'red'
    $removeBtn.style.backgroundColor = 'aliceblue'
    $removeBtn.style.fontWeight = 'bold'
    $removeBtn.style.cssFloat = 'right'
    $removeBtn.style.cursor = 'pointer'
    $removeBtn.style.borderColor = 'aliceblue'
    $removeBtn.style.borderRadius = '50%'
    $removeBtn.setAttribute('title', 'Delete book')
    return $removeBtn
  },

  displayToggleCompleteBookRead (element, isComplete) {
    if (isComplete) {
      element.style.textDecoration = 'line-through'
    } else {
      element.style.textDecoration = 'none'
    }
  }
}

export default View