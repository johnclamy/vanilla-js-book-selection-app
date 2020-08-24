const View = {
  $books: document.querySelector(".ebook-list"),
  $totalCount: document.querySelector(".ebook-count"),
  $completedCount: document.querySelector(".completed-read"),
  $toReadCount: document.querySelector(".still-to-read"),

  createListItem(content) {
    const $listItem = document.createElement("li");
    const $textItem = document.createElement("p");

    $textItem.textContent = content.title;
    $listItem.append($textItem);
    $listItem.setAttribute("id", content.id);
    $listItem.setAttribute("title", content.shortDesr);
    $listItem.style.display = "flex";
    $listItem.style.justifyContent = "space-between";
    $listItem.style.cursor = "pointer";
    return $listItem;
  },

  listItems(items) {
    const $listItems = items.map((item) => this.createListItem(item));
    return $listItems;
  },

  setStyle(element, bgColour) {
    element.style.backgroundColor = bgColour;
    element.style.color = "white";
    element.style.padding = "6px";
    element.style.borderRadius = "5px";
    element.style.width = "90px";
    element.style.textAlign = "center";
  },

  clearList(item) {
    while (item.firstChild) {
      item.removeChild(item.firstChild);
    }
  },

  renderEmptyList(list) {
    const MESSAGE = "You currently have no books to read.";
    const $message = document.createElement("p");

    $message.textContent = MESSAGE;
    $message.style.backgroundColor = "LightYellow";
    $message.style.padding = "20px";
    $message.style.textAlign = "center";
    $message.style.fontSize = "1.2rem";
    $message.style.fontWeight = "bold";
    $message.style.color = "DarkOrange";

    list.append($message);
  },

  renderTotalCount(totalCount) {
    const text = `Total books ${totalCount}`;
    this.$totalCount.textContent = text;
    this.setStyle(this.$totalCount, "MediumBlue");
  },

  renderCompletedCount(completedCount) {
    const text = `Completed ${completedCount}`;
    this.$completedCount.textContent = text;
    this.setStyle(this.$completedCount, "Crimson");
  },

  renderStillToRead(toReadCount) {
    const text = `Still to read ${toReadCount}`;
    this.$toReadCount.textContent = text;
    this.setStyle(this.$toReadCount, "ForestGreen");
  },

  renderStats(stats) {
    this.renderTotalCount(stats.totalCount);
    this.renderCompletedCount(stats.completedCount);
    this.renderStillToRead(stats.getToReadCount());
  },

  renderRemoveBtn() {
    const $removeBtn = document.createElement("button");
    const handleDelButton = function () {
      console.log("button clicked!");
    };
    $removeBtn.textContent = "x";
    $removeBtn.style.color = "red";
    $removeBtn.style.fontWeight = "bold";
    $removeBtn.style.background = "transparent";
    $removeBtn.style.cursor = "pointer";
    $removeBtn.style.border = "none";
    $removeBtn.setAttribute("id", "del-btn");
    $removeBtn.setAttribute("title", "Delete book");
    return $removeBtn;
  }
};

export default View;
