const View = {
  $ebookCount: document.querySelector(".ebook-count"),
  $completedRead: document.querySelector(".completed-read"),
  $stillToRead: document.querySelector(".still-to-read"),

  createMenuItem(content) {
    const $listItem = document.createElement("li");
    $listItem.textContent = content.title;
    return $listItem;
  },

  displayBookCount() {},
  displayCompletedRead() {},
  displayStillToRead() {}
};

export default View;
