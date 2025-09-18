const listCategories = document.querySelectorAll("#categories .item");
console.log("Number of categories:", listCategories.length);

listCategories.forEach(category => {
  const title = category.querySelector("h2").textContent;
  const elementsCount = category.querySelectorAll("ul li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
})
