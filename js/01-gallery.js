import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const list = document.querySelector(".gallery");
// console.log(list);

const result = galleryItems
  .map((element) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
</div>`;
  })
  .join("");

list.insertAdjacentHTML("afterbegin", result);

list.addEventListener("click", handlerClick);

let instance;

function handlerClick(event) {
  event.preventDefault();

  if (event.target.className !== "gallery") {
    instance = basicLightbox.create(`
  <img src="${event.target.dataset.source}"/>
`);

    instance.show();
  }
}

// window.addEventListener("keydown", handlerKey);

// function handlerKey(event) {
//   if (event.key === "Escape") {
//     instance.close();
//   }
// }
