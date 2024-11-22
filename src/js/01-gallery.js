import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ description, original, preview }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const imgId = evt.target.dataset.source;
  const imgDesc = evt.target.alt;

  const instance = basicLightbox.create(
    `<img
      class="gallery__image"
      src="${imgId}"
      alt="${imgDesc}"
    />`,
    {
      // closable: false,
    }
  );

  instance.show();
}
