const listEl = document.querySelector("#categories");
const navItemsEl = listEl.querySelectorAll(".item");

function countCategories(items) {
  console.log(`Number of categories: ${items.length}`);

  return items.forEach((item) => {
    const titleEl = item.firstElementChild;
    const itemElements = item.lastElementChild;

    console.log(`Category: ${titleEl.textContent}`);
    console.log(`Elements: ${itemElements.childElementCount}`);
  });
}

countCategories(navItemsEl);


